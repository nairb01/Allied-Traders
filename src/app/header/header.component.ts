import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const scrollRevealOption = {
          distance: '50px',
          origin: 'bottom',
          duration: 1000,
        };

        ScrollReveal.default().reveal('.header__image img', {
          ...scrollRevealOption,
          origin: 'right',
        });
        ScrollReveal.default().reveal('.header__content div', {
          duration: 1000,
          delay: 500,
        });
        ScrollReveal.default().reveal('.header__content h1', {
          ...scrollRevealOption,
          delay: 1000,
        });
        ScrollReveal.default().reveal('.header__content p', {
          ...scrollRevealOption,
          delay: 1500,
        });
        
      });
    }
  }
}
