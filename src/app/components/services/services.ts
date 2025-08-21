import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface CarouselImage {
  url: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent implements OnInit {
  @Output() openAppointmentPopup = new EventEmitter<void>();
  
  constructor(
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    const metadata = this.seoService.getPageMetadata('services');
    this.seoService.updatePageMetadata(metadata);
  }

  openAppointment() {
    this.openAppointmentPopup.emit();
  }

  // Impermeabilización
  showImpermeabilizacionPopup = false;
  currentSlide = 0;

  impermeabilizacionImages: CarouselImage[] = [
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen1.jpeg',
      alt: 'Impermeabilización de fachada',
      title: 'Impermeabilización de Fachadas',
      description: 'Protección integral de fachadas contra la humedad y deterioro'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen2.jpeg',
      alt: 'Impermeabilización de cubierta',
      title: 'Impermeabilización de Cubiertas',
      description: 'Sistemas avanzados para la protección de techos y azoteas'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen3.jpeg',
      alt: 'Aplicación de impermeabilizante',
      title: 'Aplicación Profesional',
      description: 'Técnicas especializadas de aplicación de impermeabilizantes'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen4.jpeg',
      alt: 'Protección de superficies',
      title: 'Protección de Superficies',
      description: 'Protección integral de diferentes tipos de superficies'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen5.jpg',
      alt: 'Trabajos especializados',
      title: 'Trabajos Especializados',
      description: 'Aplicación profesional con materiales de alta calidad'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen6.webp',
      alt: 'Sistemas avanzados',
      title: 'Sistemas Avanzados',
      description: 'Implementación de sistemas modernos de impermeabilización'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen7.jpg',
      alt: 'Control de calidad',
      title: 'Control de Calidad',
      description: 'Supervisión y control de calidad en todos los procesos'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen8.jpeg',
      alt: 'Resultados duraderos',
      title: 'Resultados Duraderos',
      description: 'Garantía de protección a largo plazo para su propiedad'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen9.webp',
      alt: 'Mantenimiento preventivo',
      title: 'Mantenimiento Preventivo',
      description: 'Servicios de mantenimiento y revisión de sistemas'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/impermeabilizacion/imagen10.jpg',
      alt: 'Proyectos completados',
      title: 'Proyectos Completados',
      description: 'Portafolio de proyectos exitosos de impermeabilización'
    }
  ];

  // Obra Civil
  showObraCivilPopup = false;
  currentSlideObraCivil = 0;

  obraCivilImages: CarouselImage[] = [
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen1.jpeg',
      alt: 'Obra civil y construcción',
      title: 'Proyectos de Obra Civil',
      description: 'Desarrollo integral de proyectos de construcción y urbanismo'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen2.jpeg',
      alt: 'Excavaciones y cimentaciones',
      title: 'Excavaciones y Cimentaciones',
      description: 'Trabajos especializados en fundaciones y estructuras'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen3.jpeg',
      alt: 'Mampostería y estructura',
      title: 'Mampostería y Estructura',
      description: 'Construcción de muros y elementos estructurales'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen4.jpeg',
      alt: 'Urbanismo integral',
      title: 'Urbanismo Integral',
      description: 'Planificación y desarrollo urbano completo'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen5.jpeg',
      alt: 'Construcción avanzada',
      title: 'Construcción Avanzada',
      description: 'Técnicas modernas de construcción y urbanismo'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen6.jpeg',
      alt: 'Proyectos especializados',
      title: 'Proyectos Especializados',
      description: 'Desarrollo de proyectos complejos de ingeniería civil'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen7.jpeg',
      alt: 'Infraestructura urbana',
      title: 'Infraestructura Urbana',
      description: 'Desarrollo de infraestructura para entornos urbanos'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen8.jpeg',
      alt: 'Gestión de proyectos',
      title: 'Gestión de Proyectos',
      description: 'Coordinación y gestión integral de proyectos de obra civil'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen9.jpeg',
      alt: 'Control de calidad',
      title: 'Control de Calidad',
      description: 'Supervisión y control de calidad en todos los procesos'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/obra-civil/imagen10.jpeg',
      alt: 'Resultados finales',
      title: 'Resultados Finales',
      description: 'Entrega de proyectos con los más altos estándares de calidad'
    }
  ];

  // Interiores
  showInterioresPopup = false;
  currentSlideInteriores = 0;

  interioresImages: CarouselImage[] = [
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/interiores/imagen1.jpg',
      alt: 'Adecuación de interiores',
      title: 'Diseño de Interiores',
      description: 'Creación de espacios funcionales y estéticos'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/interiores/imagen2.jpg',
      alt: 'Estuco y pintura',
      title: 'Estuco y Pintura',
      description: 'Acabados profesionales para interiores'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/interiores/imagen3.webp',
      alt: 'Drywall y acabados',
      title: 'Drywall y Acabados',
      description: 'Instalación de tabiques y acabados especializados'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/interiores/imagen4.jpeg',
      alt: 'Redes eléctricas y sanitarias',
      title: 'Redes Eléctricas y Sanitarias',
      description: 'Instalación de sistemas eléctricos y de plomería'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/interiores/imagen5.jpeg',
      alt: 'Acabados especializados',
      title: 'Acabados Especializados',
      description: 'Trabajos de acabado con materiales de alta calidad'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/interiores/imagen6.jpeg',
      alt: 'Diseño funcional',
      title: 'Diseño Funcional',
      description: 'Optimización de espacios para máxima funcionalidad'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/interiores/imagen7.jpeg',
      alt: 'Resultados finales',
      title: 'Resultados Finales',
      description: 'Espacios interiores transformados con excelencia'
    }
  ];

  // Incendios
  showIncendiosPopup = false;
  currentSlideIncendios = 0;

  incendiosImages: CarouselImage[] = [
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen1.jpeg',
      alt: 'Red contra incendios',
      title: 'Sistemas Contra Incendios',
      description: 'Instalación de redes de protección contra incendios'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen2.jpeg',
      alt: 'Planificación integral',
      title: 'Planificación Integral',
      description: 'Diseño y planificación de sistemas de seguridad'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen3.jpeg',
      alt: 'Montaje especializado',
      title: 'Montaje Especializado',
      description: 'Instalación profesional de equipos contra incendios'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen4.jpeg',
      alt: 'Cumplimiento normativo',
      title: 'Cumplimiento Normativo',
      description: 'Garantía de cumplimiento con todas las normativas vigentes'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen5.jpeg',
      alt: 'Sistemas de detección',
      title: 'Sistemas de Detección',
      description: 'Instalación de sistemas avanzados de detección de incendios'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen6.jpeg',
      alt: 'Equipos de extinción',
      title: 'Equipos de Extinción',
      description: 'Montaje de equipos especializados para extinción de incendios'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen7.jpeg',
      alt: 'Pruebas y certificación',
      title: 'Pruebas y Certificación',
      description: 'Realización de pruebas y certificación de sistemas'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen8.jpeg',
      alt: 'Pruebas y certificación',
      title: 'Pruebas y Certificación',
      description: 'Realización de pruebas y certificación de sistemas'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen9.jpeg',
      alt: 'Mantenimiento preventivo',
      title: 'Mantenimiento Preventivo',
      description: 'Servicios de mantenimiento y revisión de sistemas'
    },
    {
      url: 'https://raw.githubusercontent.com/davidgrandas8908/gis-ingenieria-images/master/gis-ingenieria-images/incendios/imagen10.jpeg',
      alt: 'Proyectos completados',
      title: 'Proyectos Completados',
      description: 'Portafolio de proyectos exitosos de sistemas contra incendios'
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

  // Método para navegar a la página de citas
  navigateToAppointment() {
    this.router.navigate(['/appointment']);
  }
}
