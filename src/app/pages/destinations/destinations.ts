import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Destination } from '../../core/models/destination';
import { DestinationService } from '../../core/services/destination';

@Component({
  selector: 'app-destinations',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css'
})
export class Destinations implements OnInit {

  destinations: Destination[] = [];
  filteredDestinations: Destination[] = [];
  visibleDestinations: Destination[] = [];

  searchTerm = '';
  selectedCategory = 'All';
  selectedLocation = 'All';
  selectedSort = 'default';

  visibleCount = 6;
  pageSize = 6;

  constructor(
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.destinations = this.destinationService.getDestinations();

    this.filteredDestinations = [...this.destinations];

    this.updateVisibleDestinations();
  }

  get categories(): string[] {
    return [
      'All',
      ...new Set(this.destinations.map(destination => destination.category))
    ];
  }

  get locations(): string[] {
    return [
      'All',
      ...new Set(this.destinations.map(destination => destination.state))
    ];
  }

  applyFilters(): void {

    let results = [...this.destinations];

    // Search
    if (this.searchTerm.trim()) {

      const search = this.searchTerm.toLowerCase();

      results = results.filter(destination =>
        destination.name.toLowerCase().includes(search) ||
        destination.location.toLowerCase().includes(search) ||
        destination.state.toLowerCase().includes(search) ||
        destination.category.toLowerCase().includes(search)
      );
    }

    // Category
    if (this.selectedCategory !== 'All') {
      results = results.filter(
        destination => destination.category === this.selectedCategory
      );
    }

    // Location
    if (this.selectedLocation !== 'All') {
      results = results.filter(
        destination => destination.state === this.selectedLocation
      );
    }

    // Sorting
    switch (this.selectedSort) {

      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;

      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;

      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;

      case 'popularity':
        results.sort((a, b) => b.popularity - a.popularity);
        break;
    }

    this.filteredDestinations = results;

    // Reset pagination whenever filters change
    this.visibleCount = this.pageSize;

    this.updateVisibleDestinations();
  }

  updateVisibleDestinations(): void {

    this.visibleDestinations =
      this.filteredDestinations.slice(0, this.visibleCount);
  }

  loadMore(): void {

    if (this.visibleCount < this.filteredDestinations.length) {

      this.visibleCount += this.pageSize;

      this.updateVisibleDestinations();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {

    const scrollPosition =
      window.innerHeight + window.scrollY;

    const pageHeight =
      document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 300) {
      this.loadMore();
    }
  }

  resetFilters(): void {

    this.searchTerm = '';
    this.selectedCategory = 'All';
    this.selectedLocation = 'All';
    this.selectedSort = 'default';

    this.applyFilters();
  }
}