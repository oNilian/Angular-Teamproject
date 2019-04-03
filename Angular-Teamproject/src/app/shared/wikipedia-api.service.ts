import {Injectable, Input, Output} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'conent-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WikipediaAPIService {
  private query: string;
  // ${this.srchQuery}
  URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;

  constructor(private http: HttpClient) {
  }

  getArticle(query): Observable<any> {
    return this.http.get(this.URL + query);
  }

}

