import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';
import {SearchResult} from '../../shared/search-result';

@Component({
  selector: 'app-aritcle-list',
  templateUrl: './aritcle-list.component.html',
  styleUrls: ['./aritcle-list.component.css']
})
export class AritcleListComponent implements OnInit {

  regex = ` /<span class="searchmatch">/gi`;
  private wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=julian`;
  private limit = `&limit=5`;
  private format = `&format=json`;
  data: any;
  searchText: any;
  currentRate = 0;

  sortByTitle() {
    this.data.sort((a, b) => a.title.localeCompare(b.title));
  }

  reverseSortbyTitle() {
    this.data.sort((a, b) => b.title.localeCompare(a.title));

  }

  SaveObjectFromRatingList() {
    confirm('You gave this article ' + this.currentRate + ' stars. Thanks for rating and using this app!');

  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    this.http.get(this.wikiURL)
      .subscribe(
        res => {
          this.data = res.query.search;
          console.log(res);
        }
      );
  }

  // action: 'query',
  // list: 'search',
  // srsearch: searchBar.val(),
  // format: 'json'
  // 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=gmail';
  // sortByTitle() {
  //   this.data.sort((a, b) => a.name.localeCompare(b.name));
  // }
  //
  // reverseSortbyTitle() {
  //   this.data.sort((a, b) => b.name.localeCompare(a.name));
  // }

}

// export class WikipediaJSONAPI {
//
//   private wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=`;
//   private limit = `&limit=5`;
//   private format = `&format=json`;
//
//   constructor(private http: HttpClient) {
//   }
//
//   getArticle(query): Observable<any> {
//     return this.http.get(this.wikiURL + query + this.limit + this.format);
//   }
// }
//


// resultsObject: SearchResult[];
// data$ = new Subject<any>();
// search;
// sortByTitle() {
//   this.resultsObject.sort((a, b) => a.name.localeCompare(b.name));
//   console.log(this.resultsObject);
// }
//
// reverseSortbyTitle() {
//   this.resultsObject.sort((a, b) => b.name.localeCompare(a.name));
//   console.log(this.resultsObject);
// }
//
// // constructor(private wikiService: WikipediaJSONAPI) {
// // }
// constructor(private service: GetSavedArticlesService) {
// }
//
// ngOnInit() {
// }
//
// // search_Wikipedia(q: string) {
// //   return this.wikiService.getArticle(q).subscribe(wiki => {
// //     this.resultsObject = wiki.query.search;
// //     console.log(wiki);
// //   });
// // }
// getSavedArticles() {
//   return this.service.getArticle().subscribe(res => {
//     this.resultsObject = res;
//     this.data$.next(res);
//     console.log(this.resultsObject);
//   });
// }
//
//
// filter(search) {
//   this.data$.next(this.resultsObject.filter(_ => _.name.includes(search)));
// }
