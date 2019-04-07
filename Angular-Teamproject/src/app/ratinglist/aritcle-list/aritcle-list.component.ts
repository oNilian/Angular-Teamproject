import {Component, OnInit} from '@angular/core';
import {WikipediaJSONAPI} from '../../shared/wikipediaJSONAPI';
import {SearchResult} from '../../shared/search-result';

@Component({
  selector: 'app-aritcle-list',
  templateUrl: './aritcle-list.component.html',
  styleUrls: ['./aritcle-list.component.css']
})
export class AritcleListComponent implements OnInit {
  resultsObject: SearchResult[];


  sortByTitle() {
    this.resultsObject.sort((a, b) => a.title.localeCompare(b.title));
    console.log(this.resultsObject);
  }

  reverseSortbyTitle() {
    this.resultsObject.sort((a, b) => b.title.localeCompare(a.title));
    console.log(this.resultsObject);
  }


  constructor(private wikiService: WikipediaJSONAPI) {
  }

  ngOnInit() {
  }

  searchWikipedia(q: string) {
    return this.wikiService.getArticle(q).subscribe(wiki => {
      this.resultsObject = wiki.query.search;
    });
  }
}

