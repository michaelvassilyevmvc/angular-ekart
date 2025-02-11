import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent
{
  addToCart: number = 0;
  product = {
    name: 'Phone XL',
    price: 799,
    color: 'Red',
    discounted: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice()
  {
    return this.product.price - (this.product.price * this.product.discounted / 100)
  }

  inputName(event: any)
  {
  }

  increaseAddToCart()
  {
    if (this.product.inStock > this.addToCart)
      this.addToCart++;
  }

  discreaseAddToCart()
  {
    if (this.addToCart > 0)
      this.addToCart--;
  }
}
