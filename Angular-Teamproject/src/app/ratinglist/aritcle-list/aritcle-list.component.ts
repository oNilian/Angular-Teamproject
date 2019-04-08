import {Component, OnInit} from '@angular/core';
import {DatabaseApiService} from '../../shared/database-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-aritcle-list',
  templateUrl: './aritcle-list.component.html',
  styleUrls: ['./aritcle-list.component.css']
})
export class AritcleListComponent implements OnInit {
  private wikiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=julian`;
  private limit = `&limit=5`;
  private format = `&format=json`;
  private uniqueID = [];
  searchText: any;
  currentRate = 0;
  dataArray = [];
  private baseURL: string = 'https://forverkliga.se/JavaScript/api/api-db.php?';
  private groupID: string = '&group=1av0E'; // Used for test create new for final.

  sortByTitle() {
    this.dataArray.sort((a, b) => a.title.localeCompare(b.title));
  }

  reverseSortbyTitle() {
    this.dataArray.sort((a, b) => b.title.localeCompare(a.title));

  }


  constructor(private databaseApiService: DatabaseApiService) {
  }

  // setData(title: string, article: string, url: string, rating: number = 0, uniqueID: number =  Math.floor((Math.random() * 999999) + 1)): Observable<any> {
  //   const value = encodeURI(JSON.stringify({
  //     title: title,
  //     article: article,
  //     link: url,
  //     rating: rating
  //   }));
  //   this.http.get(this.baseURL + 'op=set' + this.groupID + '&key=' + uniqueID + '&value=' + value).subscribe();
  //   return;
  // }
  //

  SaveObjectFromRatingList(wiki, i) {
    confirm('You gave this article ' + wiki.rating + ' stars. Thanks for rating and using this app!');
    this.databaseApiService.setData(wiki.title, wiki.article, this.baseURL, wiki.rating, this.uniqueID[i]);
    // console.log(this.uniqueID[i]);
    // console.log(wiki.title);
  }

  ngOnInit() {
    console.log(this.groupID);
    console.log(this.uniqueID);
    /*
       this.http.get(this.forverkligaObject)
         .subscribe(
           res => {
             this.data = res.data;
             console.log(this.data);
           }
         );
         */
    this.databaseApiService.getData().subscribe(dataHandler => {
      if (dataHandler.status === 'success') {
        dataHandler.data.forEach((singleData: any) => {
          this.dataArray.push(JSON.parse(singleData.value));
          this.uniqueID.push(singleData.key);
          console.log(singleData.key);
        });
      } else {
        console.log('Database API Error!');
      }
    });
// =======
//
//     this.http.get(this.wikiURL)
//       .subscribe(
//         res => {
//           console.log('article list http get: res=', res);
//           // this.data = res.query.search;
//           //  console.log(res.query.search);
//
//          }
//       );
// >>>>>>> dev
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
