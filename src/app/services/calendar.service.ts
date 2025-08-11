import { Injectable } from '@angular/core';

export interface CalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees: Array<{ email: string }>;
  reminders: {
    useDefault: boolean;
    overrides: Array<{ method: string; minutes: number }>;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  /**
   * Crea un evento en Google Calendar usando la API de URL
   * @param event Datos del evento a crear
   * @returns URL para crear el evento en Google Calendar
   */
  createGoogleCalendarEvent(event: CalendarEvent): string {
    const startDate = this.formatDateForGoogle(event.start.dateTime);
    const endDate = this.formatDateForGoogle(event.end.dateTime);
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.summary,
      dates: `${startDate}/${endDate}`,
      details: event.description,
      location: 'GIS Ingeniería & Soluciones',
      sf: 'true',
      output: 'xml'
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  /**
   * Formatea la fecha para Google Calendar
   * @param dateString Fecha en formato ISO
   * @returns Fecha formateada para Google Calendar
   */
  private formatDateForGoogle(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, '');
  }

  /**
   * Abre Google Calendar en una nueva ventana
   * @param event Datos del evento
   */
  openGoogleCalendar(event: CalendarEvent): void {
    const calendarUrl = this.createGoogleCalendarEvent(event);
    window.open(calendarUrl, '_blank', 'width=800,height=600');
  }

  /**
   * Envía email de confirmación usando mailto
   * @param formData Datos del formulario
   * @param recipientEmail Email del destinatario
   */
  sendConfirmationEmail(formData: any, recipientEmail: string = 'contacto.ingenieriagis@gmail.com'): void {
    const subject = encodeURIComponent('Confirmación de Cita - GIS Ingeniería');
    const body = encodeURIComponent(this.createEmailBody(formData));
    
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl);
  }

  /**
   * Crea el cuerpo del email de confirmación
   * @param formData Datos del formulario
   * @returns Cuerpo del email formateado
   */
  private createEmailBody(formData: any): string {
    return `
Hola ${formData.name},

Tu cita ha sido agendada exitosamente:

📅 Fecha: ${formData.date}
⏰ Hora: ${formData.time}
🔧 Servicio: ${formData.service}
📱 Teléfono: ${formData.phone}
📧 Email: ${formData.email}

${formData.description ? `📝 Descripción: ${formData.description}` : ''}

Nos pondremos en contacto contigo pronto para confirmar los detalles y coordinar la consulta.

Saludos,
Equipo GIS Ingeniería & Soluciones

---
Este es un mensaje automático generado por el sistema de agendamiento.
    `.trim();
  }

  /**
   * Valida si una fecha es válida para agendar
   * @param dateString Fecha a validar
   * @returns true si la fecha es válida
   */
  isValidAppointmentDate(dateString: string): boolean {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return selectedDate > today;
  }

  /**
   * Obtiene la fecha mínima para agendar (mañana)
   * @returns Fecha en formato YYYY-MM-DD
   */
  getMinAppointmentDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  /**
   * Genera horarios disponibles
   * @param startHour Hora de inicio (formato 24h)
   * @param endHour Hora de fin (formato 24h)
   * @param interval Intervalo en minutos
   * @returns Array de horarios disponibles
   */
  generateTimeSlots(startHour: number = 8, endHour: number = 18, interval: number = 30): string[] {
    const slots: string[] = [];
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    
    return slots;
  }
}
