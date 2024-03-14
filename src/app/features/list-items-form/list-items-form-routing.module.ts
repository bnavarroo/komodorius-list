import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsFormComponent } from './list-items-form.component';

const routes: Routes = [
  { path: '', component: ListItemsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListItemsFormRoutingModule { }
