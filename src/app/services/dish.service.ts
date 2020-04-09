import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable()
export class DishService {

  // constructor(private http: HttpClient) { }

  // OBSERVABLES
  // getDishes(): Observable<Dish[]> {
  //   return of(DISHES).pipe(delay(2000));
  // }


  // getDish(id: string): Observable<Dish> {
  //   return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  // }


  // getFeaturedDish(): Observable<Dish> {
  //   return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  // }

  // // add one more method
  // getDishIds(): Observable<string[] | any> {
  //   return of(DISHES.map(dish => dish.id));
  // }

  //  with http
  // getDishes(): Observable<Dish[]> {
  //   return this.http.get<Dish[]>(baseURL + 'dishes');
  // }

  // getDish(id: number): Observable<Dish> {
  //   return this.http.get<Dish>(baseURL + 'dishes/' + id);
  // }

  // getFeaturedDish(): Observable<Dish> {
  //   return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  // }

  // getDishIds(): Observable<number[] | any> {
  //   return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  // }

  //HTTP Client:Error Handling
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }

  //update
  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}