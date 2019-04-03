import {Injectable, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaAPIService {
  private query: string;
  // ${this.srchQuery}
  URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=`;

  constructor(private http: HttpClient) {
  }

  getArticle(query): Observable<any> {
    return this.http.get(this.URL + query);
  }
}

