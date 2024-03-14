import { Component, Input } from '@angular/core';
import { ListEntity } from '@core/entities/list.entity';

@Component({
  selector: 'app-parent-list-info',
  templateUrl: './parent-list-info.component.html',
  styleUrl: './parent-list-info.component.scss'
})
export class ParentListInfoComponent {
  @Input() parentList?: ListEntity;
}
