import { Injectable } from '@angular/core';

import { STORAGE_CONFIG } from '@core/config/storage/storage.config';

import { DatatypeConversorService } from '@core/services/datatype-conversor/datatype-conversor.service';
import { CrudService } from '@core/services/crud/crud.service';

import { ICrudModel } from '@core/models/crud.model';

import { ListEntity } from '@core/entities/list.entity';
import { ListItemEntity } from '@core/entities/list-item.entity';
import { IStorageConfigValue } from '@core/config/storage/storage.config.types';
import { TReponseData } from '@core/services/storage/storage.service.types';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService implements ICrudModel<ListItemEntity> {
  private _storageConfig: IStorageConfigValue = STORAGE_CONFIG.listsItem;
  private _storageListsConfig: IStorageConfigValue = { ...STORAGE_CONFIG.lists, valueKeyRef: 'id'};
  listId: number = 0;

  constructor (
    private _crudService: CrudService<ListItemEntity>,
    private _crudServiceList: CrudService<ListEntity>,
  ) { }

  init(initalData: ListItemEntity[]): void {
    this._crudService.init(initalData, this._storageConfig);
  }

  setListId(listId: number) {
    this.listId = listId;
  }

  get(id?: number): TReponseData<Array<ListItemEntity>> {
    if (!!id) {
      return this._crudService.read(this._storageConfig, id);
    }

    return this.getAllFromList(this.listId);
  };

  add(data: ListItemEntity): TReponseData<Array<ListItemEntity>> {
    const allData = this._crudService.read(this._storageConfig);
    const lastId = allData.result?.at(-1)?.id ?? 0;
    const formattedData: ListItemEntity = {
      ...data,
      id: lastId + 1,
      createdAt: DatatypeConversorService.toDateTimeString(new Date())
    };

    return this._crudService.create(formattedData, this._storageConfig);
  };

  update(data: ListItemEntity): TReponseData<Array<ListItemEntity>> {
    const formattedData: ListItemEntity = {
      ...data,
      updatedAt: DatatypeConversorService.toDateTimeString(new Date()),
    };

    return this._crudService.update(formattedData, this._storageConfig);
  };

  delete(id: number): TReponseData<Array<ListItemEntity>> {
    const response = this._crudService.delete(id, this._storageConfig);
    if(response.success && response?.result) {
      const result = response?.result?.filter(listItem => listItem?.listId === this?.listId);
      return {
        ...response,
        result,
      };
    }

    return response;
  };

  getParentList(listId?: number): TReponseData<Array<ListEntity>> {
    const currentListId = listId ?? this.listId;
    return this._crudServiceList.read(this._storageListsConfig, currentListId);
  }

  getAllFromList(listId?: number): TReponseData<Array<ListItemEntity>> {
    const parentListResponse = this.getParentList(listId);
    const parentList = parentListResponse?.result?.[0];
    const config: IStorageConfigValue = { ...this._storageConfig, valueKeyRef: 'listId'};
    return this._crudService.read(config, parentList?.id);
  }

  deleteAllFromList(listId: number): TReponseData<Array<ListItemEntity>> {
    const config: IStorageConfigValue = { ...this._storageConfig, valueKeyRef: 'listId'};
    return this._crudService.delete(listId, config);
  }
}
