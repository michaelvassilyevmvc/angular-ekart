import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent
{
  product = {
    name: 'Phone XL',
    price: 799,
    color: 'Red',
    discounted: 8.5,
    inStock: 0
  }

  getDiscountedPrice()
  {
    return this.product.price - (this.product.price * this.product.discounted / 100)
  }
}
