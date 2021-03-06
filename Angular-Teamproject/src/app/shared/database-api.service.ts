import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  private baseURL: string = 'https://forverkliga.se/JavaScript/api/api-db.php?';
  private groupID: string = '&group=rw2YB'; // Used for test create new for final.

  getData(): Observable<any> {
    return this.http.get(this.baseURL + 'whathaveidone' + this.groupID);
  }

  setData(title: string, article: string, url: string, rating: number = 0, uniqueID: number = 0): Observable<any> {
    if (uniqueID !== 0) {
      this.delData(uniqueID);
    } else {
      uniqueID = Math.floor((Math.random() * 999999) + 1);
    }
    const value = encodeURI(JSON.stringify({
      title: title,
      article: article,
      link: url,
      rating: rating
    }));
    this.http.get(this.baseURL + 'op=set' + this.groupID + '&key=' + uniqueID + '&value=' + value).subscribe();
    return;
  }

  delData(uniqueID: number) {
    this.http.get(this.baseURL + 'op=remove' + this.groupID + '&key=' + uniqueID).subscribe();
    return;
  }

  constructor(private http: HttpClient) {
  }
}
