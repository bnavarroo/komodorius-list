import { ICrudModel } from '@core/models/crud.model';

import { TReponseData } from '@core/services/storage/storage.service.types';

export abstract class CrudController<EntityType, StorageDataType = Array<EntityType>> {
  data: StorageDataType;
  message?: string = '';
  error: boolean = false;

  constructor (
    protected _service: ICrudModel<EntityType, StorageDataType>,
    initialData: StorageDataType,
  ) {
    this.data = initialData;
    this._service.init(initialData);
  }

  protected setData(data?: TReponseData<StorageDataType>) {
    this.data = data?.result as StorageDataType;
    this.message = data?.msg;
    this.error = !data?.success;
  }

  protected getItem(id?: number) {
    const response = this._service.get(id);
    this.setData(response);
  }

  protected onInit() {
    this.getItem();
  }

  protected addItem(data: EntityType) {
    const response = this._service.add(data);
    this.setData(response);
  }

  protected updateItem(data: EntityType) {
    const response = this._service.update(data);
    this.setData(response);
  }

  protected deleteItem(id: number) {
    const response = this._service.delete(id);
    this.setData(response);
  }
}
