import {Component, OnInit} from '@angular/core';
import {WikipediaAPIService} from '../../shared/wikipedia-api.service';
import {DatabaseApiService} from '../../shared/database-api.service';

@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css']
})
export class AddNewArticleComponent implements OnInit {
  [x: string]: any;

  titles = [];
  articles = [];
  wikiLink = [];
  newArticle: string;

  constructor(private wikiService: WikipediaAPIService, private databaseApiService: DatabaseApiService) {
  }

  ngOnInit() {
    this.wikiService.getArticle('frontend').subscribe(wiki => {
      this.titles = [];
      this.articles = [];
      this.wikiLink = [];
      wiki[1].forEach(data => {
        this.titles.push(data);
      });
      wiki[2].forEach(data => {
        this.articles.push(data);
      });
      wiki[3].forEach(data => {
        this.wikiLink.push(data);
      });
    });
  }

  searchWikipedia(q = 'wiki') {
    return this.wikiService.getArticle(q).subscribe(wiki => {
      this.titles = [];
      this.articles = [];
      this.wikiLink = [];
      wiki[1].forEach(data => {
        this.titles.push(data);
      });
      wiki[2].forEach(data => {
        this.articles.push(data);
      });
      wiki[3].forEach(data => {
        this.wikiLink.push(data);
      });

    });
  }

  onAddToListClick(title: string, article: string, url: string) {

    if (confirm('Youre about to add the ' + title + ' article to your ratings list , would you like to proceed?') === true) {
      this.databaseApiService.setData(title, article, url);
      alert( title + ' was added to your list of articles. Go ahead and givet a rating in the ratings list!');
    }
  }

}
