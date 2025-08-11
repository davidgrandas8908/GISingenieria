import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselImage {
  url: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  showImpermeabilizacionPopup = false;
  currentSlide = 0;

  impermeabilizacionImages: CarouselImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Impermeabilización de fachada',
      title: 'Impermeabilización de Fachadas',
      description: 'Protección integral de fachadas contra la humedad y deterioro'
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Impermeabilización de cubierta',
      title: 'Impermeabilización de Cubiertas',
      description: 'Sistemas avanzados para la protección de techos y azoteas'
    },
    {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Trabajos de impermeabilización',
      title: 'Trabajos Especializados',
      description: 'Aplicación profesional con materiales de alta calidad'
    },
    {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Resultado final impermeabilización',
      title: 'Resultados Duraderos',
      description: 'Garantía de protección a largo plazo para su propiedad'
    }
  ];

  openImpermeabilizacionPopup() {
    this.showImpermeabilizacionPopup = true;
    this.currentSlide = 0;
    document.body.style.overflow = 'hidden';
  }

  closeImpermeabilizacionPopup() {
    this.showImpermeabilizacionPopup = false;
    document.body.style.overflow = 'auto';
  }

  nextSlide() {
    if (this.currentSlide < this.impermeabilizacionImages.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
