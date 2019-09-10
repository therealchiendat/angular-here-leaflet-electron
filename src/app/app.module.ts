
import { NgModule, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component'
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShippingComponent } from './shipping/shipping.component';
import { NearbyComponent } from './nearby/nearby.component';
import { HereMapComponent } from './here-map/here-map.component';
import { MaterialModule } from './material-module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'nearby', component: NearbyComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HereMapComponent,
    NearbyComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
