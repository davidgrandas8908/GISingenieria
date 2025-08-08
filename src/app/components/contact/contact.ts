import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';

  async onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpzgwqzg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.showSuccessMessage = true;
        form.reset();
        console.log('Mensaje enviado exitosamente');
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error en el formulario:', error);
      this.showErrorMessage = true;
      this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      
      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
