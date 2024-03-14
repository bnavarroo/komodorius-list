import { Injectable } from '@angular/core';

import { StorageService } from '@core/services/storage/storage.service';

import { IStorageConfigValue } from '@core/config/storage/storage.config.types';
import { TValueKey as TStorageValueKey, TReponseData as TStorageReponseData } from '@core/services/storage/storage.service.types';


@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<EntityType, StorageDataType = Array<EntityType>> {

  constructor (
    private _storageService: StorageService<StorageDataType>,
  ) { }

  init(initialValue: StorageDataType, storageConfig: IStorageConfigValue): void {
    const { storageKey } = storageConfig;
    const data = this._storageService.get(storageKey);

    if (!data?.success) {
      this._storageService.set(storageKey, initialValue);
    }
  }

  create(data: EntityType, storageConfig: IStorageConfigValue): TStorageReponseData<StorageDataType> {
    const { storageKey } = storageConfig;
    const storageData = this._storageService.get(storageKey);

    if (!Array.isArray(storageData?.result)) {
      return this._storageService.set(storageKey, data as unknown as StorageDataType);
    } else {
      const result = storageData.result || [];
      const response = this._storageService.set(storageKey, [...(result as Array<unknown>), data] as StorageDataType);

      return response.success ? { ...response, result: [data] as StorageDataType } : response;
    }
  }

  read(storageConfig: IStorageConfigValue, id?: TStorageValueKey): TStorageReponseData<StorageDataType> {
    const { storageKey, valueKeyRef } = storageConfig;
    const storageData = this._storageService.get(storageKey);

    if (!!id && Array.isArray(storageData?.result)) {
      const result = (storageData.result as unknown as Array<unknown>)?.filter(
        item => (item as Record<TStorageValueKey, unknown>)?.[valueKeyRef] === id
      );

      return { ...storageData, result: result as StorageDataType };
    }

    return storageData;
  }

  update(data: EntityType, storageConfig: IStorageConfigValue): TStorageReponseData<StorageDataType> {
    const { storageKey, valueKeyRef } = storageConfig;
    const storageData = this._storageService.get(storageKey);
    if (!Array.isArray(storageData?.result)) {
      return this._storageService.set(storageKey, data as unknown as StorageDataType);
    } else {
      const valueKey = (data as Record<TStorageValueKey, TStorageValueKey>)?.[valueKeyRef];
      const result = (storageData.result as Array<Record<TStorageValueKey, TStorageValueKey>>)?.map(
        item => item?.[valueKeyRef] === valueKey ? data : item
      );
      const response = this._storageService.set(storageKey, result as StorageDataType);

      return response.success ? { ...response, result: [data] as StorageDataType } : response;
    }
  }

  delete(id: TStorageValueKey, storageConfig: IStorageConfigValue): TStorageReponseData<StorageDataType> {
    const { storageKey, valueKeyRef } = storageConfig;
    const storageData = this._storageService.get(storageKey);
    if (!Array.isArray(storageData?.result)) {
      return this._storageService.remove(storageKey);
    } else {
      const result = (storageData.result as unknown as Array<unknown>)?.filter(
        item => (item as Record<TStorageValueKey, unknown>)?.[valueKeyRef] !== id
      );
      return this._storageService.set(storageKey, result as StorageDataType);
    }
  }
}
