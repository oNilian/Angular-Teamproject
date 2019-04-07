import {Injectable, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaJSONAPI {

  private wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=`;
  private limit = `&limit=5`;
  private format = `&format=json`;

  constructor(private http: HttpClient) {
  }

  getArticle(query): Observable<any> {
    return this.http.get(this.wikiURL + query + this.limit + this.format);
  }
}

