import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ListsRoutingModule } from './lists-routing.module';

import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { DisplayValuePipe } from '@shared/pipes/display-value/display-value.pipe';

import { TitlePageComponent } from '@shared/components/title-page/title-page.component';
import { ResponsiveTableContainerComponent } from '@shared/components/responsive-table-container/responsive-table-container.component';
import { ListsComponent } from './lists.component';
import { ListsTableComponent } from './components/lists-table/lists-table.component';

@NgModule({
  declarations: [ListsComponent, ListsTableComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ListsRoutingModule,
    DisplayValuePipe,
    TitlePageComponent,
    ResponsiveTableContainerComponent
  ],
})
export class ListsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPenToSquare, faTrashCan, faUpRightFromSquare);
  }
}
