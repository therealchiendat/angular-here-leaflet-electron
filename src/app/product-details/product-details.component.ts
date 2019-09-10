import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) { }

  addToCart(product) {
    this._snackBar.open('Added to Cart','Dismiss', {
      duration: 2000,
    });
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
  
  onNotify() {
    this._snackBar.open('You will be notified when the product goes on sale', 'Dismiss', {
      duration: 2000,
    });
  }

}
