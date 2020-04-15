import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
// import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeaderService {

  constructor(private http: HttpClient) {
  }

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
  // getLeaders(): Observable<Leader[]> {
  //   return of(LEADERS).pipe(delay(2000));

  // }





  // getLeader(id: number): Observable<Leader> {
  //   return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));

  // }
  // getFeaturedLeader(): Observable<Leader> {
  //   return of(LEADERS.filter((dish) => dish.featured)[0]).pipe(delay(2000));

  // }

  //assingment 4

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]));
  }

  getleaderIds(): Observable<number[] | any> {
    return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)));
  }

}


