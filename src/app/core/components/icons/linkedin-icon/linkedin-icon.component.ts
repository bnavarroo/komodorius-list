import { Component, Input } from '@angular/core';

import { TCssStyle } from '@app/core/types/css-style.types';

@Component({
  selector: 'app-linkedin-icon',
  standalone: true,
  imports: [],
  templateUrl: './linkedin-icon.component.svg',
})
export class LinkedinIconComponent {
  @Input() style: TCssStyle = {};
}
