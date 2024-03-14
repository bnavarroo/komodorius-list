import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-default-layout>
      <router-outlet />
    </app-default-layout>
  `
})
export class AppComponent { }
