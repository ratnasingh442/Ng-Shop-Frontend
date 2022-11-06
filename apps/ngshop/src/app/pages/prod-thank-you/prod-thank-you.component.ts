import { Component, OnInit } from '@angular/core';
import { CartService, OrdersService } from '@bluebits/orders';

@Component({
  selector: 'ngshop-prod-thank-you',
  templateUrl: './prod-thank-you.component.html'
})
export class ProdThankYouComponent implements OnInit {

  constructor(private orderService:OrdersService,private cartService:CartService) { }

  ngOnInit(): void {
    const orderData = this.orderService.getcacheOrder()

    this.orderService.createOrder(orderData).subscribe(() => {
        this.cartService.emptyCart();
        this.orderService.removecacheOrder()
      },
      () => {
        //display some message to user
      }
    );
    }
  }

