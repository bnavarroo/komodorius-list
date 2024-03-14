import { Component, Input } from '@angular/core';

import { TCssStyle } from '@app/core/types/css-style.types';

@Component({
  selector: 'app-github-icon',
  standalone: true,
  imports: [],
  templateUrl: './github-icon.component.svg',
})
export class GithubIconComponent {
  @Input() style: TCssStyle = {};
}
