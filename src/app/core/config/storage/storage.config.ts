import { TStorageConfig } from './storage.config.types';

export const STORAGE_CONFIG: TStorageConfig = {
  lists: { storageKey: 'lists', valueKeyRef: 'id' },
  listsItem: { storageKey: 'lists-item', valueKeyRef: 'id' },
};
