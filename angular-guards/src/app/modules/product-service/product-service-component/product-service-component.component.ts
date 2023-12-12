import { Component } from '@angular/core';

@Component({
  selector: 'app-product-service-component',
  templateUrl: './product-service-component.component.html',
  styleUrls: ['./product-service-component.component.scss'],
})
export class ProductServiceComponentComponent {
  constructor() {
    console.log('service component');
  }

  ngOnInit(): void {
    console.log('service component');
  }
}
