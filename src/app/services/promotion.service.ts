import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
// import { PROMOTIONS } from '../shared/promotions';


import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';

@Injectable()
// {   providedIn: 'root'
// })
export class PromotionService {

  constructor(private http: HttpClient) {
  }
  // getPromotions(): Promise<Promotion[]> {
  //   return Promise.resolve(PROMOTIONS);
  // }


  // getPromotion(id: number): Promise<Promotion> {
  //   return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  // }


  // getFeaturedPromotion(): Promise<Promotion> {
  //   return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  // }

  //simulate delay Promise

  // getPromotions(): Promise<Promotion[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(PROMOTIONS), 2000);
  //   });
  // }

  // getPromotion(id: number): Promise<Promotion> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
  //   });
  // }


  // getFeaturedPromotion(): Promise<Promotion> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
  //   });
  // }

  //OBSERVABLES
  // getPromotions(): Observable<Promotion[]> {
  //   return of(PROMOTIONS).pipe(delay(2000));
  // }



  // getPromotion(id: number): Observable<Promotion> {
  //   return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
  // }



  // getFeaturedPromotion(): Observable<Promotion> {
  //   return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  // }

  //assignment 4
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
  }

  getPromotionIds(): Observable<number[] | any> {
    return this.getPromotions().pipe(map(promotions => promotions.map(promotion => promotion.id)));
  }



}
