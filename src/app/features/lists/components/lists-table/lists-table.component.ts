import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ListEntity } from '@core/entities/list.entity';
import { ITableSettings } from '@shared/types/table-settings.types';

@Component({
  selector: 'app-lists-table',
  templateUrl: './lists-table.component.html',
  styleUrl: './lists-table.component.scss'
})
export class ListsTableComponent {
  @Input() data: Array<ListEntity> = [];
  @Output() deleteItemEvent: EventEmitter<number> = new EventEmitter();

  readonly tableSettings: ITableSettings = {
    columns: [
      { id: 'id', title: '# Id', classes: 'text-center column-id' },
      { id: 'name', title: 'Nome', classes: 'column-name' },
      { id: 'createdAt', title: 'Criada em', classes: 'text-center'},
      { id: 'updatedAt', title: 'Última atualização', classes: 'text-center'},
    ],
    actions: {
      title: 'Ações',
      styles: {
        actionClass: 'action-element',
        iconClass: 'action-element-icon',
        sizeIcon: '1x',
      },
    },
  };

  handleDeleteEvent(value: number) {
    this.deleteItemEvent.emit(value);
  }
}
