import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListItemsFormRoutingModule } from './list-items-form-routing.module';

import { TitlePageComponent } from '@shared/components/title-page/title-page.component';
import { ListItemsFormComponent } from './list-items-form.component';

@NgModule({
  declarations: [ListItemsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListItemsFormRoutingModule,
    TitlePageComponent,
  ],
})
export class ListItemsFormModule { }
