import { Component, OnInit } from '@angular/core';

import { ListsService } from '@core/services/lists/lists.service';

import { CrudController } from '@app/core/controllers/crud.controller';

import { ListEntity } from '@core/entities/list.entity';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent extends CrudController<ListEntity> implements OnInit {

  constructor(override _service: ListsService) {
    super(_service, []);
  }

  ngOnInit(): void {
    this.onInit();
  }

  handleDeleteItem(id: number) {
    const response = this._service.deleteCascade(id);
    this.setData(response);
  }
}
