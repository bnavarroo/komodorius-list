export interface ListItemEntity extends Record<string, unknown> {
  id: number;
  name: string;
  listId: number;
  quantity?: number;
  createdAt?: string;
  updatedAt?: string;
  isChecked?: boolean;
}
