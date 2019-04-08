import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetSavedArticlesService {
  dataUrl = 'https://jsonplaceholder.typicode.com/users';
  data;
  data$ = new Subject<any>();
  search;

  constructor(private http: HttpClient) { }
  getArticle(): Observable<any> {
    return this.http.get(this.dataUrl);
  }


}
// this.http.get(this.dataUrl)
//   .subscribe(
//     res => {
//       this.data = res;
//       this.data$.next(res);
//     },
//     err => {
//       console.log('Error occured');
//     }
//   );
