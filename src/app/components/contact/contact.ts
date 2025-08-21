import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  @Output() openAppointmentPopup = new EventEmitter<void>();
  
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    const metadata = this.seoService.getPageMetadata('contact');
    this.seoService.updatePageMetadata(metadata);
  }

  openAppointment() {
    this.openAppointmentPopup.emit();
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Endpoint de Formspree para contacto.ingenieriagis@gmail.com
      const response = await fetch('https://formspree.io/f/xanbvwwb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Respuesta del servidor:', response.status, response.statusText);

      if (response.ok) {
        this.showSuccessMessage = true;
        form.reset();
        console.log('Mensaje enviado exitosamente');
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error en la respuesta:', errorData);
        throw new Error(`Error al enviar el mensaje: ${response.status}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      this.showErrorMessage = true;
      this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
