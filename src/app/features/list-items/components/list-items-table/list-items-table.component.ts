import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ListItemEntity } from '@core/entities/list-item.entity';
import { ITableSettings } from '@shared/types/table-settings.types';

@Component({
  selector: 'app-list-items-table',
  templateUrl: './list-items-table.component.html',
  styleUrl: './list-items-table.component.scss'
})
export class ListItemsTableComponent {
  @Input() data: Array<ListItemEntity> = [];
  @Output() deleteItemEvent: EventEmitter<number> = new EventEmitter();
  @Output() checkeItemEvent: EventEmitter<ListItemEntity> = new EventEmitter();

  readonly tableSettings: ITableSettings = {
    columns: [
      { id: 'id', title: '# Id', classes: 'text-center column-id' },
      { id: 'name', title: 'Nome', classes: 'column-name' },
      { id: 'quantity', title: 'Qtde.', classes: 'text-center column-quantity' },
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

  handleCheckEvent(value: ListItemEntity) {
    this.checkeItemEvent.emit(value);
  }
}
