import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ICrudModel } from '@core/models/crud.model';

import { TReponseData } from '@core/services/storage/storage.service.types';

export abstract class CrudFormController<EntityType> {

  private _formBuilder = inject(FormBuilder);
  protected _activatedRoute = inject(ActivatedRoute);
  pageForm: FormGroup;
  titlePage: string;

  constructor(
    protected _service: ICrudModel<EntityType, Array<EntityType>>,
    protected initialValues: {
      titlePage: { new: string, edit: string };
      serviceInitValue: Array<EntityType>;
      formEntity: EntityType;
      validators?: Record<keyof EntityType, Validators>;
    }
  ) {
    this.titlePage = initialValues.titlePage.new;
    this.pageForm = this.getPageForm();
    this._service.init(initialValues.serviceInitValue);
  }

  onInit(): void {
    const id = parseInt(this._activatedRoute.snapshot.params?.['id']);
    let response: TReponseData<Array<EntityType>>, initialData: EntityType | undefined;
    if (!!id) {
      response = this._service.get(id);
      initialData = response?.result?.[0];

      if (initialData?.['id' as keyof EntityType] === id) {
        this.titlePage = `${this.initialValues.titlePage.edit} - #${id}`;
        this.pageForm = this.getPageForm(initialData);
      }
    }
  }

  getPageForm(data?: EntityType) {
    const defaultEntity = this.initialValues.formEntity;
    const entity = (data ?? defaultEntity) as Record<keyof EntityType, unknown>;

    Object.keys(entity as object).map(key => {
      const typedKey = key as keyof EntityType;
      if(this.initialValues?.validators?.[typedKey]) {
        entity[typedKey] = [entity[typedKey], this.initialValues?.validators?.[typedKey]];
      }
    });

    return this._formBuilder.group({ ...entity });
  }

  checkIsDisabledControl(data: FormGroup) {
    return !data.valid || data.pristine;
  }

  getCancelActionText() {
    return this.checkIsDisabledControl(this.pageForm) ? 'Voltar' : 'Cancelar';
  }

  submitForm() {
    const formData: EntityType = this.pageForm.value;
    const response = !!formData['id' as keyof EntityType] ? this._service.update(formData) : this._service.add(formData);
    const resultData = response?.result?.[0];
    if(!!resultData) {
      this.pageForm.reset(resultData);
    }
  }
}
