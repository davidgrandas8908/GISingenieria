import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  @Output() openAppointmentPopup = new EventEmitter<void>();

  openAppointment() {
    this.openAppointmentPopup.emit();
  }
}
