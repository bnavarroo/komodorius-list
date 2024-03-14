export interface ListEntity extends Record<string, unknown> {
  id: number;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}
