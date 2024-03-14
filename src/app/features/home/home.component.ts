import { Component } from '@angular/core';

import { IHomeLink } from './home.component.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly links: Array<IHomeLink>;

  constructor() {
    const link = '/minhas-listas';
    const commonClasses = 'flex-center text-center links-item';

    this.links = [{
      link: `${link}/nova-lista`,
      classes: `btn-secondary ${commonClasses}`,
      text: 'Criar Lista'
    },
    {
      link,
      classes: `btn-primary-outline ${commonClasses}`,
      text: 'Ver Minhas Listas'
    }];
  }

}
