import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor() {
    this.price = 10;
  }

  @Input() myValue: any;
  @Input() price: number;
}
