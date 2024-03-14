import { Component } from '@angular/core';

import { LogoComponent } from '@core/components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  styles: ['header { margin-bottom: 10px; }'],
  template: `
    <header class="flex-center">
      <app-logo />
    </header>
  `,
})
export class HeaderComponent { }
