export interface IResponseOfRequest<T> {
  success: boolean;
  msg?: string;
  result?: T
};
