import {Component, OnInit} from '@angular/core';
import {WikipediaAPIService} from '../../shared/wikipedia-api.service';
import {query} from '@angular/animations';

@Component({
  selector: 'app-aritcle-list',
  templateUrl: './aritcle-list.component.html',
  styleUrls: ['./aritcle-list.component.css']
})
export class AritcleListComponent implements OnInit {
  articles: any;
  URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;
  queryLink: any;

  constructor(private wikiService: WikipediaAPIService) {
  }

  ngOnInit() {
  }

  searchWikipedia(q: string) {
    return this.wikiService.getArticle(q).subscribe(wiki => {
      console.log(this.articles);
      this.queryLink = q;
      console.log(this.articles);
      this.articles = wiki.query.search;
    });
  }

}
