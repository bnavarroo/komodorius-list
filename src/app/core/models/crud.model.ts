import { TReponseData } from '@core/services/storage/storage.service.types';

export interface ICrudModel<EntityType, StorageDataType = Array<EntityType>> {

  init(initalData: StorageDataType): void;

  get(id?: number): TReponseData<StorageDataType>;

  add(data: EntityType): TReponseData<StorageDataType>;

  update(data: EntityType): TReponseData<StorageDataType>;

  delete(id: number): TReponseData<StorageDataType>;
}
