import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,ClientsComponent,FooterComponent,HeaderComponent,HomeComponent,NavbarComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alied-tyre';
}
