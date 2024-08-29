import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const scrollRevealOption = {
          distance: '50px',
          origin: 'bottom',
          duration: 1000,
        };
       ScrollReveal.default().reveal(".about__image img", {
          ...scrollRevealOption,
          origin: "right",
        });
       ScrollReveal.default().reveal(".about__card", {
          duration: 1000,
          interval: 500,
          delay: 500,
        });
      });
    }
  }
}
