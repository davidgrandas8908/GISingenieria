import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    const metadata = this.seoService.getPageMetadata('home');
    this.seoService.updatePageMetadata(metadata);
  }
}
