import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent{
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();
    
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
    
  }
  clearCart() {
    this.items = this.cartService.clearCart();
  }
  
  onSubmit(customerData) {
    // Process checkout data here
    if (customerData.name && customerData.address){
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    }
    else{
      window.alert('Please fill out the form')
    }
  }
}
