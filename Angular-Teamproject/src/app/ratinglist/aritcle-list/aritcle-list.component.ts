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
  URLEncode: any;
  link: any;
  URL: any = `https://en.wikipedia.org/wiki`;
  myString: any;

  constructor(private wikiService: WikipediaAPIService) {
  }

  ngOnInit() {
  }

// `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`;
  searchWikipedia(q: string) {
    return this.wikiService.getArticle(q).subscribe(wiki => {
      this.articles = wiki.query.search;
      console.log(wiki.query.search);
    });
  }
}
