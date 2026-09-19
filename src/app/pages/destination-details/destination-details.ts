import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Destination } from '../../core/models/destination';
import { DestinationService } from '../../core/services/destination';

@Component({
  selector: 'app-destination-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './destination-details.html',
  styleUrl: './destination-details.css',
})
export class DestinationDetails implements OnInit {
  mapUrl?: SafeResourceUrl;

  destination?: Destination;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.destination = this.destinationService.getDestinationById(id);

    if (this.destination) {
      const { lat, lng } = this.destination.coordinates;

      const url = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;

      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}
