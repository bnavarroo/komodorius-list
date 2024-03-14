import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms'

import { ListsService } from '@core/services/lists/lists.service';

import { CrudFormController } from '@app/core/controllers/crud-form.controller';

import { ListEntity } from '@core/entities/list.entity';

@Component({
  selector: 'app-lists-form',
  templateUrl: './lists-form.component.html',
  styleUrl: './lists-form.component.scss'
})
export class ListsFormComponent extends CrudFormController<ListEntity> implements OnInit {
  constructor(
    override _service: ListsService
  ) {
    const initialValues = {
      titlePage: { new: 'Nova Lista', edit: 'Editar Lista' },
      serviceInitValue: [],
      formEntity: { id: 0, name: '', description: '', createdAt: '', updatedAt: '' },
      validators: { name: Validators.required },
    }
    super(_service, initialValues);
  }

  ngOnInit(): void {
    this.onInit();
  }
}
