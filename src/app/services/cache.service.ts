import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  // Cache configuration for better performance
  private readonly CACHE_NAME = 'gis-ingenieria-cache-v1';
  private readonly CACHE_URLS = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/appointment',
    '/assets/logos/gis-logo-color.png',
    '/assets/logos/gis-logo-blanco.png',
    '/assets/logos/gis-logo-negro.png'
  ];

  async cacheResources(): Promise<void> {
    if ('caches' in window) {
      try {
        const cache = await caches.open(this.CACHE_NAME);
        await cache.addAll(this.CACHE_URLS);
        console.log('Resources cached successfully');
      } catch (error) {
        console.error('Error caching resources:', error);
      }
    }
  }

  async getCachedResponse(request: Request): Promise<Response | undefined> {
    if ('caches' in window) {
      try {
        const cache = await caches.open(this.CACHE_NAME);
        return await cache.match(request);
      } catch (error) {
        console.error('Error getting cached response:', error);
        return undefined;
      }
    }
    return undefined;
  }

  async cacheResponse(request: Request, response: Response): Promise<void> {
    if ('caches' in window) {
      try {
        const cache = await caches.open(this.CACHE_NAME);
        await cache.put(request, response.clone());
      } catch (error) {
        console.error('Error caching response:', error);
      }
    }
  }

  // Preload critical resources
  preloadCriticalResources(): void {
    const criticalResources = [
      '/assets/logos/gis-logo-color.png',
      '/assets/logos/gis-logo-blanco.png',
      '/assets/logos/gis-logo-negro.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  // Optimize images for better loading
  optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!this.isInViewport(img)) {
        img.loading = 'lazy';
      }
      
      // Add alt text if missing
      if (!img.alt) {
        img.alt = 'GIS Ingeniería & Soluciones';
      }
    });
  }

  private isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
