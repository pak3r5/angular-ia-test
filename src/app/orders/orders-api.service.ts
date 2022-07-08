import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {API_URL} from '../../environments/environment';
import { Order } from "./order.model";


@Injectable({
    providedIn: 'root'
})

export  class  OrderApiService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    constructor(private  httpClient:  HttpClient) {}
     get(status: string) {
        return this.httpClient.get<Order[]>(API_URL + '/api/v1/orders?status='+status);
    }
}

    