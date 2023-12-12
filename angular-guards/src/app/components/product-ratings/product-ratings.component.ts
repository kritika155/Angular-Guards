import { Component } from '@angular/core';

@Component({
  selector: 'app-product-ratings',
  templateUrl: './product-ratings.component.html',
  styleUrls: ['./product-ratings.component.scss'],
})
export class ProductRatingsComponent {
  private unsavedChanges = false;
  selectedRating: number | null = null;

  rateProduct() {
    if (this.selectedRating !== null) {
      console.log('Rating:', this.selectedRating);
      this.unsavedChanges = true;
    }
  }

  saveChanges() {
    console.log('Saving changes...');
    this.unsavedChanges = false;
  }

  hasUnsavedChanges(): boolean {
    return this.unsavedChanges;
  }
}
