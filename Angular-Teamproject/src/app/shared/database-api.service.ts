import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  private baseURL = 'https://forverkliga.se/JavaScript/api/api-db.php?';
  private groupID = '&group=7ZWHL'; // Used for test create new for final.

  getData(): Observable<any> {
    // request will output a JSON object
    return this.http.get(this.baseURL + 'whathaveidone' + this.groupID);
  }
  setData(key: object, value: number = 0): Observable<any> {
    const stringObject: string = JSON.stringify(key);
    return this.http.get(this.baseURL + 'op=set' + this.groupID + '&key=' + stringObject + '&value=' + value);
  }
  delData(key: object) {
    const stringObject: string = JSON.stringify(key);
    return this.http.get(this.baseURL + 'op=remove' + this.groupID + '&key=' + stringObject);
  }
  getTop10() {
    // reguest data - getData() save as a object...
    // topTenList = data.sort( (x, y) => y.value - x.value );
    // topTenList = topTenList.slice(0, 10);
    // return topTenList
  }

  constructor(private http: HttpClient) { }
}
