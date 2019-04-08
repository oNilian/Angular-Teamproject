import {Injectable, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaJSONAPI {

  private wikiURL = `http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts|info&exintro&titles=`;
  JSON = `&format=json&explaintext&redirects&inprop=url&indexpageids`;
  private limit = `&limit=5`;
  private format = `&format=json`;

  constructor(private http: HttpClient) {}

  getArticle(query): Observable<any> {
     return this.http.get(this.wikiURL + query + this.JSON);
  }
}

