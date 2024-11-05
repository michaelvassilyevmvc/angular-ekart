import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent
{
  // name = 'John Daw';
  // addToCart: number = 0;
  // product = {
  //   name: 'iPhone 13',
  //   price: 999,
  //   color: 'Red',
  //   discount: 10,
  //   inStock: 10,
  //   pImage: '/assets/images/iphone.png'
  // }

  // getDiscountedPrice()
  // {
  //   return this.product.price - (this.product.price * this.product.discount / 100);
  // }

  // decrementCartValue()
  // {
  //   if (this.addToCart > 0)
  //   {
  //     this.addToCart--;
  //   }
  // }

  // incrementCartValue()
  // {
  //   if (this.addToCart < this.product.inStock)
  //   {
  //     this.addToCart++;
  //   }
  // }

  // onNameChange(event: any)
  // {
  //   console.log(event.target.value);
  //   this.name = event.target.value;
  // }

  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
}
