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
  // Impermeabilización
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

  // Obra Civil
  showObraCivilPopup = false;
  currentSlideObraCivil = 0;

  obraCivilImages: CarouselImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Obra civil y construcción',
      title: 'Proyectos de Obra Civil',
      description: 'Desarrollo integral de proyectos de construcción y urbanismo'
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Excavaciones y cimentaciones',
      title: 'Excavaciones y Cimentaciones',
      description: 'Trabajos especializados en fundaciones y estructuras'
    },
    {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Mampostería y estructura',
      title: 'Mampostería y Estructura',
      description: 'Construcción de muros y elementos estructurales'
    },
    {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Urbanismo integral',
      title: 'Urbanismo Integral',
      description: 'Planificación y desarrollo urbano completo'
    }
  ];

  // Interiores
  showInterioresPopup = false;
  currentSlideInteriores = 0;

  interioresImages: CarouselImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Adecuación de interiores',
      title: 'Diseño de Interiores',
      description: 'Creación de espacios funcionales y estéticos'
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Estuco y pintura',
      title: 'Estuco y Pintura',
      description: 'Acabados profesionales para interiores'
    },
    {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Drywall y acabados',
      title: 'Drywall y Acabados',
      description: 'Instalación de tabiques y acabados especializados'
    },
    {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Redes eléctricas y sanitarias',
      title: 'Redes Eléctricas y Sanitarias',
      description: 'Instalación de sistemas eléctricos y de plomería'
    }
  ];

  // Incendios
  showIncendiosPopup = false;
  currentSlideIncendios = 0;

  incendiosImages: CarouselImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Red contra incendios',
      title: 'Sistemas Contra Incendios',
      description: 'Instalación de redes de protección contra incendios'
    },
    {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Planificación integral',
      title: 'Planificación Integral',
      description: 'Diseño y planificación de sistemas de seguridad'
    },
    {
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Montaje especializado',
      title: 'Montaje Especializado',
      description: 'Instalación profesional de equipos contra incendios'
    },
    {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Cumplimiento normativo',
      title: 'Cumplimiento Normativo',
      description: 'Garantía de cumplimiento con todas las normativas vigentes'
    }
  ];

  // Métodos para Impermeabilización
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

  // Métodos para Obra Civil
  openObraCivilPopup() {
    this.showObraCivilPopup = true;
    this.currentSlideObraCivil = 0;
    document.body.style.overflow = 'hidden';
  }

  closeObraCivilPopup() {
    this.showObraCivilPopup = false;
    document.body.style.overflow = 'auto';
  }

  nextSlideObraCivil() {
    if (this.currentSlideObraCivil < this.obraCivilImages.length - 1) {
      this.currentSlideObraCivil++;
    }
  }

  previousSlideObraCivil() {
    if (this.currentSlideObraCivil > 0) {
      this.currentSlideObraCivil--;
    }
  }

  goToSlideObraCivil(index: number) {
    this.currentSlideObraCivil = index;
  }

  // Métodos para Interiores
  openInterioresPopup() {
    this.showInterioresPopup = true;
    this.currentSlideInteriores = 0;
    document.body.style.overflow = 'hidden';
  }

  closeInterioresPopup() {
    this.showInterioresPopup = false;
    document.body.style.overflow = 'auto';
  }

  nextSlideInteriores() {
    if (this.currentSlideInteriores < this.interioresImages.length - 1) {
      this.currentSlideInteriores++;
    }
  }

  previousSlideInteriores() {
    if (this.currentSlideInteriores > 0) {
      this.currentSlideInteriores--;
    }
  }

  goToSlideInteriores(index: number) {
    this.currentSlideInteriores = index;
  }

  // Métodos para Incendios
  openIncendiosPopup() {
    this.showIncendiosPopup = true;
    this.currentSlideIncendios = 0;
    document.body.style.overflow = 'hidden';
  }

  closeIncendiosPopup() {
    this.showIncendiosPopup = false;
    document.body.style.overflow = 'auto';
  }

  nextSlideIncendios() {
    if (this.currentSlideIncendios < this.incendiosImages.length - 1) {
      this.currentSlideIncendios++;
    }
  }

  previousSlideIncendios() {
    if (this.currentSlideIncendios > 0) {
      this.currentSlideIncendios--;
    }
  }

  goToSlideIncendios(index: number) {
    this.currentSlideIncendios = index;
  }
}
