import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListsFormRoutingModule } from './lists-form-routing.module';

import { TitlePageComponent } from '@shared/components/title-page/title-page.component';
import { ListsFormComponent } from './lists-form.component';

@NgModule({
  declarations: [ListsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListsFormRoutingModule,
    TitlePageComponent,
  ],
})
export class ListsFormModule { }
