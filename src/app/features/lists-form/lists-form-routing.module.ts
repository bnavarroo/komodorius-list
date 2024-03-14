import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsFormComponent } from './lists-form.component';

const routes: Routes = [
  { path: '', component: ListsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsFormRoutingModule { }
