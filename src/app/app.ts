import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { WhatsAppButtonComponent } from './components/whatsapp-button/whatsapp-button';
import { AppointmentComponent } from './components/appointment/appointment';
import { SwService } from './services/sw.service';
import { CacheService } from './services/cache.service';
import { AccessibilityService } from './services/accessibility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, 
    FooterComponent, 
    WhatsAppButtonComponent,
    AppointmentComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  showAppointmentPopup = false;

  constructor(
    private swService: SwService,
    private cacheService: CacheService,
    private accessibilityService: AccessibilityService
  ) {}

  ngOnInit() {
    // Register service worker
    this.swService.registerServiceWorker();
    
    // Preload critical resources
    this.cacheService.preloadCriticalResources();
    
    // Optimize images
    setTimeout(() => {
      this.cacheService.optimizeImages();
    }, 1000);
    
    // Show install prompt
    this.swService.showInstallPrompt();
    
    // Initialize accessibility features
    setTimeout(() => {
      this.accessibilityService.initialize();
    }, 2000);
  }

  openAppointmentPopup() {
    this.showAppointmentPopup = true;
  }

  closeAppointmentPopup() {
    this.showAppointmentPopup = false;
  }
}
