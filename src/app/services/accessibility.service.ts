import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {

  constructor() { }

  // Add ARIA labels to improve accessibility
  addAriaLabels(): void {
    // Add labels to navigation elements
    const navElements = document.querySelectorAll('nav a, nav button');
    navElements.forEach((element, index) => {
      if (!element.getAttribute('aria-label')) {
        const text = element.textContent?.trim() || `Navegación ${index + 1}`;
        element.setAttribute('aria-label', text);
      }
    });

    // Add labels to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt) {
        img.alt = 'GIS Ingeniería & Soluciones';
      }
      if (!img.getAttribute('aria-label')) {
        img.setAttribute('aria-label', img.alt);
      }
    });

    // Add labels to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', `Botón ${index + 1}`);
      }
    });

    // Add labels to forms
    const forms = document.querySelectorAll('form');
    forms.forEach((form, index) => {
      if (!form.getAttribute('aria-label')) {
        form.setAttribute('aria-label', `Formulario ${index + 1}`);
      }
    });

    // Add labels to inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const label = input.getAttribute('placeholder') || input.getAttribute('name') || 'Campo de entrada';
      if (!input.getAttribute('aria-label')) {
        input.setAttribute('aria-label', label);
      }
    });
  }

  // Add skip links for keyboard navigation
  addSkipLinks(): void {
    const skipLinks = [
      { href: '#main-content', text: 'Saltar al contenido principal' },
      { href: '#navigation', text: 'Saltar a la navegación' },
      { href: '#footer', text: 'Saltar al pie de página' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLink.setAttribute('aria-label', link.text);
      
      // Add styles for skip links
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    });
  }

  // Add focus indicators
  addFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3f51b5 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #fff !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Add keyboard navigation support
  addKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      // Escape key to close modals
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal, .popup');
        modals.forEach(modal => {
          if (modal.classList.contains('show') || (modal as HTMLElement).style.display === 'block') {
            const closeButton = modal.querySelector('[data-dismiss="modal"], .close');
            if (closeButton) {
              (closeButton as HTMLElement).click();
            }
          }
        });
      }
    });
  }

  // Add semantic HTML improvements
  addSemanticHTML(): void {
    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('.main-content');
    if (mainContent) {
      mainContent.id = 'main-content';
      mainContent.setAttribute('role', 'main');
    }

    // Add navigation landmark
    const navigation = document.querySelector('nav') || document.querySelector('.navigation');
    if (navigation) {
      navigation.id = 'navigation';
      navigation.setAttribute('role', 'navigation');
    }

    // Add footer landmark
    const footer = document.querySelector('footer') || document.querySelector('.footer');
    if (footer) {
      footer.id = 'footer';
      footer.setAttribute('role', 'contentinfo');
    }

    // Add banner landmark
    const header = document.querySelector('header') || document.querySelector('.header');
    if (header) {
      header.setAttribute('role', 'banner');
    }
  }

  // Initialize all accessibility features
  initialize(): void {
    this.addAriaLabels();
    this.addSkipLinks();
    this.addFocusIndicators();
    this.addKeyboardNavigation();
    this.addSemanticHTML();
  }
}
