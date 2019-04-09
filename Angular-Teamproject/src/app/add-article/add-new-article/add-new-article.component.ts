import {Component, Inject, OnInit} from '@angular/core';
import {WikipediaAPIService} from '../../shared/wikipedia-api.service';
import {DatabaseApiService} from '../../shared/database-api.service';
import {DOCUMENT} from '@angular/platform-browser';

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
    this.wikiService.getArticle('npm').subscribe(wiki => {
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

    if (confirm('Youre about to add the ' + title + ' article to ratings list!') === true) {
      this.databaseApiService.setData(title, article, url);
      alert(title + ' was added to your list of articles in ratinglist');
    }
  }

  deleteThisArticle(i) {
    this.databaseApiService.delData(this.uniqueID[i]);
    this.dataArray.splice(i, 1);
  }


  clearSearch(query) {
    this.titles.splice(0, 50);
    this.articles.splice(0, 50);
    this.wikiLink.splice(0, 50);
  }
}
