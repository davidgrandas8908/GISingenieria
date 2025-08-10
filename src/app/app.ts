import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { WhatsAppButtonComponent } from './components/whatsapp-button/whatsapp-button';
import { AppointmentComponent } from './components/appointment/appointment';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, 
    FooterComponent, 
    WhatsAppButtonComponent, 
    AppointmentComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
