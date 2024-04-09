import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListItemsService } from '@core/services/list-items/list-items.service';

import { CrudController } from '@app/core/controllers/crud.controller';

import { ListEntity } from '@core/entities/list.entity';
import { ListItemEntity } from '@core/entities/list-item.entity';

@Component({
  selector: 'app-lists-item',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent extends CrudController<ListItemEntity> implements OnInit {

  parentList?: ListEntity;

  constructor(
    override _service: ListItemsService,
    private _activatedRoute: ActivatedRoute,
  ) {
    super(_service, []);
    const listId = parseInt(this._activatedRoute.snapshot.params?.['listId']);
    this._service.setListId(listId);
  }

  ngOnInit(): void {
    this.onInit();
    const listDataResponse = this._service.getParentList();
    this.parentList = listDataResponse?.result?.[0];
  }

  checkItem(listItem: ListItemEntity) {
    const updatedItem = {
      ...listItem,
      isChecked: !listItem?.isChecked,
    };

    this.updateItem(updatedItem);
  }
}
