import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from './orders/order.model';
import { OrderApiService } from './orders/orders-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-ia-test';

  constructor(private orderApiService: OrderApiService){}
  allOrders: Order[] = []

  ngOnInit(): void {
    this.get('Pending');
  }

  get(status: string) {
    this.allOrders = []
    this.orderApiService.get(status).subscribe((data) => {
      this.allOrders = data;
    });
  }
}

