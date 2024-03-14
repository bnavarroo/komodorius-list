import { Component } from '@angular/core';

import { GithubIconComponent } from '@core/components/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '@core/components/icons/linkedin-icon/linkedin-icon.component';

import { TSocialMedia } from './footer.component.types';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GithubIconComponent, LinkedinIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialMedia: TSocialMedia = {
    github: {
      url: 'https://github.com',
      user: '/bnavarroo',
      title: 'Github',
      iconStyle: { width: '1.7em', height: '1.7em', marginRight: '2px' }
    },
    linkedin: {
      url: 'https://www.linkedin.com/in',
      user: '/bruno-navarro-oliveira',
      title: 'Linkedin',
      iconStyle: { width: '2.1em', height: '2.1em', marginTop: '1px' }
    }
  };

  linkConfig = {
    classes: 'flex-center my-contatcs-item',
    target: '_blank'
  };
}
