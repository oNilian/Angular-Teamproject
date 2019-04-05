import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  private baseURL = 'https://forverkliga.se/JavaScript/api/api-db.php?';
  private groupID = '&group=1av0E'; // Used for test create new for final.

/*
Sample data:
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=1av0E&key=7534&value={"title": "Random wiki entry 13", "article": "long information about the entry", "link": "http://en.wikipedia.org/wiki/random", "rating": 5}
*/
  getData(): Observable<any> {
    return this.http.get(this.baseURL + 'whathaveidone' + this.groupID);
  }
  setData(value: object): Observable<any> {
    console.log('setData');
    const valueString = JSON.stringify(value);
    const key =  Math.floor((Math.random() * 999999) + 1); 
    return this.http.get(this.baseURL + 'op=set' + this.groupID + '&key=' + key + '&value=' + valueString);
  }
  delData(key: number) {
    console.log('delData');
    return this.http.get(this.baseURL + 'op=remove' + this.groupID + '&key=' + key);
  }

  constructor(private http: HttpClient) { }
}
