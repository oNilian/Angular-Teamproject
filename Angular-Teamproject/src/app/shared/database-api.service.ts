import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  private baseURL = 'https://forverkliga.se/JavaScript/api/api-db.php?';
  private groupID = '&group=qN6GF'; // Used for test create new for final.

  getData(): Observable<any> {
    console.log('getData');
    return this.http.get(this.baseURL + 'whathaveidone' + this.groupID);
  }
  setData(value: object, key: number = 0): Observable<any> {
    console.log('setData');
    return this.http.get(this.baseURL + 'op=set' + this.groupID + '&key=' + key + '&value=' + value);
  }
  delData() {
    console.log('delData');
    // Will not work...
    //return this.http.get(this.baseURL + 'op=remove' + this.groupID + '&key=' + key);
  }

  constructor(private http: HttpClient) { }
}
