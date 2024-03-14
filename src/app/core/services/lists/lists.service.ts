import { Injectable } from '@angular/core';

import { STORAGE_CONFIG } from '@core/config/storage/storage.config';

import { DatatypeConversorService } from '@core/services/datatype-conversor/datatype-conversor.service';
import { CrudService } from '@core/services/crud/crud.service';

import { ICrudModel } from '@core/models/crud.model';

import { ListEntity } from '@core/entities/list.entity';
import { IStorageConfigValue } from '@core/config/storage/storage.config.types';
import { TReponseData } from '@core/services/storage/storage.service.types';

@Injectable({
  providedIn: 'root'
})
export class ListsService implements ICrudModel<ListEntity> {
  private _storageConfig: IStorageConfigValue = STORAGE_CONFIG.lists;

  constructor (
    private _crudService: CrudService<ListEntity>,
  ) { }

  init(initalData: ListEntity[]): void {
    this._crudService.init(initalData, this._storageConfig);
  }

  get(id?: number | string): TReponseData<Array<ListEntity>> {
    const _id = typeof id === 'string' ? parseInt(id) : id;
    return this._crudService.read(this._storageConfig, _id);
  };

  add(data: ListEntity): TReponseData<Array<ListEntity>> {
    const allData = this.get();
    const lastId = allData.result?.at(-1)?.id ?? 0;
    const formattedData: ListEntity = {
      ...data,
      id: lastId + 1,
      createdAt: DatatypeConversorService.toDateTimeString(new Date())
    };

    return this._crudService.create(formattedData, this._storageConfig);
  };

  update(data: ListEntity): TReponseData<Array<ListEntity>> {
    const formattedData: ListEntity = {
      ...data,
      updatedAt: DatatypeConversorService.toDateTimeString(new Date()),
    };

    return this._crudService.update(formattedData, this._storageConfig);
  };

  delete(id: number): TReponseData<Array<ListEntity>> {
    return this._crudService.delete(id, this._storageConfig);
  };

  deleteCascade(id: number): TReponseData<Array<ListEntity>> {
    let response = this.delete(id);
    if (response.success) {
      const config: IStorageConfigValue = { ...STORAGE_CONFIG.listsItem, valueKeyRef: 'listId' };
      const responseItems = this._crudService.delete(id, config);
      response = {
        ...response,
        msg: response?.msg || responseItems?.msg,
        success: response.success && responseItems.success,
      }
    }

    return response;
  }
}
