import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  template: `<img src="/assets/images/logo-with-text.png" class="logo" alt="Komodorius List" title="Komodorius List">`,
  styleUrl: './logo.component.scss',
})
export class LogoComponent { }
