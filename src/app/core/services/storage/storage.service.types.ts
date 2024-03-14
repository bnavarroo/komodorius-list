import { IResponseOfRequest } from '@app/core/types/response-of-request.types';

export type TStorageData<T> =  T | null;

export type TReponseData<T> = IResponseOfRequest<TStorageData<T>>;

export type TValueKey = string | number;
