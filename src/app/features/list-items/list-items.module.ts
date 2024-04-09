import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ListItemsRoutingModule } from './list-items-routing.module';

import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faUpRightFromSquare, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

import { DisplayValuePipe } from '@shared/pipes/display-value/display-value.pipe';

import { TitlePageComponent } from '@shared/components/title-page/title-page.component';
import { ResponsiveTableContainerComponent } from '@shared/components/responsive-table-container/responsive-table-container.component';
import { ListItemsComponent } from './list-items.component';
import { ParentListInfoComponent } from './components/parent-list-info/parent-list-info.component';
import { ListItemsTableComponent } from './components/list-items-table/list-items-table.component';

@NgModule({
  declarations: [ListItemsComponent, ParentListInfoComponent, ListItemsTableComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ListItemsRoutingModule,
    DisplayValuePipe,
    TitlePageComponent,
    ResponsiveTableContainerComponent
  ],
})
export class ListsItemModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPenToSquare, faTrashCan, faUpRightFromSquare, faArrowLeft, faCheck);
  }
}
