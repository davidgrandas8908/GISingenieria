import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  @Output() openAppointmentPopup = new EventEmitter<void>();

  openAppointment() {
    this.openAppointmentPopup.emit();
  }
}
