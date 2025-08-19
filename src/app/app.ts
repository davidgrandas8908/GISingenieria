import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { WhatsAppButtonComponent } from './components/whatsapp-button/whatsapp-button';
import { AppointmentComponent } from './components/appointment/appointment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, 
    FooterComponent, 
    WhatsAppButtonComponent,
    AppointmentComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showAppointmentPopup = false;

  openAppointmentPopup() {
    this.showAppointmentPopup = true;
  }

  closeAppointmentPopup() {
    this.showAppointmentPopup = false;
  }
}
