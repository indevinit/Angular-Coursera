import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class LeaderService {

  constructor() { }

  // getLeaders(): Promise<Leader[]> {
  //   return Promise.resolve(LEADERS);
  // }

  // getLeader(id: number): Promise<Leader> {
  //   return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  // }


  // getFeaturedLeader(): Promise<Leader> {
  //   return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  // }


  // simulate a time delay
  // getLeaders(): Promise<Leader[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(LEADERS), 2000);
  //   })
  // }



  // getLeader(id: number): Promise<Leader> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
  //   });
  // }


  // getFeaturedLeader(): Promise<Leader> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
  //   });
  // }


  // OBSERVABLES
  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));

  }





  getLeader(id: number): Observable<Leader> {
    return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));

  }
  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((dish) => dish.featured)[0]).pipe(delay(2000));

  }

}


