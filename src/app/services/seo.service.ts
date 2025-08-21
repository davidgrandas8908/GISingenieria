import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  updatePageMetadata(pageData: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
  }) {
    // Update title
    this.title.setTitle(pageData.title);

    // Update meta description
    this.meta.updateTag({ name: 'description', content: pageData.description });

    // Update keywords if provided
    if (pageData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: pageData.keywords });
    }

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: pageData.title });
    this.meta.updateTag({ property: 'og:description', content: pageData.description });
    if (pageData.image) {
      this.meta.updateTag({ property: 'og:image', content: pageData.image });
    }
    if (pageData.url) {
      this.meta.updateTag({ property: 'og:url', content: pageData.url });
    }

    // Update Twitter Card tags
    this.meta.updateTag({ name: 'twitter:title', content: pageData.title });
    this.meta.updateTag({ name: 'twitter:description', content: pageData.description });
    if (pageData.image) {
      this.meta.updateTag({ name: 'twitter:image', content: pageData.image });
    }

    // Update canonical URL
    if (pageData.url) {
      this.meta.updateTag({ rel: 'canonical', href: pageData.url });
    }
  }

  // Predefined metadata for each page
  getPageMetadata(page: string) {
    const baseUrl = 'https://gisingenieria.com';
    const baseImage = `${baseUrl}/assets/logos/gis-logo-color.png`;

    const metadata = {
      home: {
        title: 'GIS Ingeniería & Soluciones - Ingeniería Civil en Colombia',
        description: 'GIS Ingeniería & Soluciones - Especialistas en ingeniería civil, impermeabilización, obra civil, interiores y sistemas contra incendios en Colombia. Soluciones integrales para propiedad horizontal.',
        keywords: 'ingeniería civil, impermeabilización, obra civil, interiores, sistemas contra incendios, Colombia, propiedad horizontal, construcción, GIS Ingeniería',
        image: baseImage,
        url: baseUrl
      },
      about: {
        title: 'Sobre Nosotros - GIS Ingeniería & Soluciones',
        description: 'Conoce más sobre GIS Ingeniería & Soluciones, empresa especializada en ingeniería civil, impermeabilización y sistemas contra incendios en Colombia.',
        keywords: 'sobre nosotros, GIS Ingeniería, historia, experiencia, ingeniería civil Colombia',
        image: baseImage,
        url: `${baseUrl}/about`
      },
      services: {
        title: 'Servicios de Ingeniería Civil - GIS Ingeniería & Soluciones',
        description: 'Servicios especializados en ingeniería civil, impermeabilización, obra civil, interiores y sistemas contra incendios. Soluciones integrales para tu proyecto.',
        keywords: 'servicios ingeniería civil, impermeabilización, obra civil, interiores, sistemas contra incendios, construcción Colombia',
        image: baseImage,
        url: `${baseUrl}/services`
      },
      contact: {
        title: 'Contacto - GIS Ingeniería & Soluciones',
        description: 'Contáctanos para tus proyectos de ingeniería civil. Teléfono: +573114491331. Email: contacto.ingenieriagis@gmail.com',
        keywords: 'contacto GIS Ingeniería, teléfono, email, ingeniería civil Colombia, cotización',
        image: baseImage,
        url: `${baseUrl}/contact`
      },
      appointment: {
        title: 'Agenda tu Cita - GIS Ingeniería & Soluciones',
        description: 'Agenda una cita para evaluar tu proyecto de ingeniería civil, impermeabilización o sistemas contra incendios.',
        keywords: 'agendar cita, consulta ingeniería civil, evaluación proyecto, GIS Ingeniería',
        image: baseImage,
        url: `${baseUrl}/appointment`
      }
    };

    return metadata[page] || metadata.home;
  }
}
