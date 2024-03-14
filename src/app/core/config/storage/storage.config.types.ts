export type TStorageConfigKeys = 'lists' | 'listsItem';

export interface IStorageConfigValue {
  storageKey: string;
  valueKeyRef: string;
}

export type TStorageConfig = Record<TStorageConfigKeys, IStorageConfigValue>;
