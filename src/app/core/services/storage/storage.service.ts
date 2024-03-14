import { Injectable } from '@angular/core';

import { DatatypeConversorService } from '@core/services/datatype-conversor/datatype-conversor.service';

import { TStorageData, TReponseData } from './storage.service.types';

@Injectable({
  providedIn: 'root'
})
export abstract class StorageService<T> {
  private _storage: Storage = window.localStorage;

  private _formatKey(key: string) {
    return `kmdrs-strg_${key}`;
  }

  private _get(key: string): TStorageData<T> {
    const data = this._storage.getItem(this._formatKey(key));
    const formatteData = DatatypeConversorService.toObject(data);

    return (Array.isArray(formatteData) || Object.keys(formatteData)?.length > 0 ? formatteData : data) as T;
  }

  private _getResponse(success: boolean, data: TStorageData<T>): TReponseData<T> {
    return {
      success,
      result: data,
      msg: success ? '' : 'Os dados solicitados não foram encontrados',
    }
  }

  get(key: string): TReponseData<T> {
    const data = this._get(key);
    return this._getResponse(!!data, data);
  }

  set(key: string, value: T): TReponseData<T>  {
    this._storage.setItem(this._formatKey(key), DatatypeConversorService.toString(value));
    return this.get(key);
  }

  remove(key: string): TReponseData<T> {
    this._storage.removeItem(key);
    return this.get(key);
  }

  clear(): void {
    this._storage.clear();
  }
}
