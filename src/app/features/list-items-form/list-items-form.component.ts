import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms'

import { ListItemsService } from '@core/services/list-items/list-items.service';

import { CrudFormController } from '@app/core/controllers/crud-form.controller';

import { ListItemEntity } from '@core/entities/list-item.entity';

@Component({
  selector: 'app-list-items-form',
  templateUrl: './list-items-form.component.html',
  styleUrl: './list-items-form.component.scss'
})
export class ListItemsFormComponent extends CrudFormController<ListItemEntity> implements OnInit {
  listId: number;

  constructor(
    override _service: ListItemsService
  ) {
    const initialValues = {
      titlePage: { new: 'Novo Item', edit: 'Editar Item' },
      serviceInitValue: [],
      formEntity: { id: 0, listId: 0, name: '', quantity: 0, createdAt: '', updatedAt: '' },
      validators: { name: Validators.required },
    };
    super(_service, initialValues);
    this.listId = parseInt(this._activatedRoute.snapshot.params?.['listId']);
    this.pageForm.patchValue({ listId: this.listId });
  }

  ngOnInit(): void {
   this.onInit();
  }
}
