import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarService, CalendarEvent } from '../../services/calendar.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss'
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  availableSlots: string[] = [];
  selectedDate: string = '';
  selectedTime: string = '';
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService
  ) {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.maxLength(500)]
    });
  }

  ngOnInit() {
    this.generateAvailableSlots();
    this.setMinDate();
  }

  setMinDate() {
    const minDate = this.calendarService.getMinAppointmentDate();
    this.appointmentForm.patchValue({ date: minDate });
  }

  generateAvailableSlots() {
    this.availableSlots = this.calendarService.generateTimeSlots(8, 18, 30);
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    this.appointmentForm.patchValue({ date: this.selectedDate });
  }

  onTimeChange(event: any) {
    this.selectedTime = event.target.value;
    this.appointmentForm.patchValue({ time: this.selectedTime });
  }

  async onSubmit() {
    if (this.appointmentForm.valid) {
      this.isSubmitting = true;
      this.submitError = '';

      try {
        const formData = this.appointmentForm.value;
        
        // Crear evento en Google Calendar
        const calendarEvent = this.createCalendarEvent(formData);
        
        // Enviar a Google Calendar API
        this.calendarService.openGoogleCalendar(calendarEvent);
        
        // Enviar email de confirmación
        this.calendarService.sendConfirmationEmail(formData);
        
        this.submitSuccess = true;
        this.appointmentForm.reset();
        this.setMinDate();
        
      } catch (error) {
        console.error('Error al agendar cita:', error);
        this.submitError = 'Hubo un error al agendar tu cita. Por favor, inténtalo de nuevo.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  createCalendarEvent(formData: any): CalendarEvent {
    const startDate = new Date(`${formData.date}T${formData.time}`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hora de duración

    return {
      summary: `Cita - ${formData.service} - ${formData.name}`,
      description: `Cliente: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nServicio: ${formData.service}\nDescripción: ${formData.description || 'Sin descripción adicional'}`,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: 'America/Bogota'
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: 'America/Bogota'
      },
      attendees: [
        { email: 'contacto.ingenieriagis@gmail.com' },
        { email: formData.email }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 día antes
          { method: 'popup', minutes: 60 } // 1 hora antes
        ]
      }
    };
  }

  resetForm() {
    this.submitSuccess = false;
    this.submitError = '';
    this.appointmentForm.reset();
    this.setMinDate();
  }
}
