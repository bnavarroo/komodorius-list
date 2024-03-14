import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface ITableSettingsColumns {
  id: string;
  title: string;
  classes?:string;
  colspan?:number;
}

interface ITableActionSettings {
  actionClass: string;
  iconClass: string;
  sizeIcon?: SizeProp;
}

export interface ITableSettings {
  columns: Array<ITableSettingsColumns>;
  actions?: {
    title: string;
    styles: ITableActionSettings
  }
}


