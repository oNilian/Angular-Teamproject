import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RatinglistModule} from './ratinglist/ratinglist.module';
import {SharedModule} from './shared/shared.module';
import {FormsModule} from '@angular/forms';
import {WikipediaAPIService} from './shared/wikipedia-api.service';
import {DatabaseApiService} from './shared/database-api.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationModule} from './navigation/navigation.module';
import {ToplistModule} from './toplist/toplist.module';
import {AddArticleModule} from './add-article/add-article.module';
import {AboutUsService} from './shared/about-us.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatinglistModule,
    SharedModule,
    FormsModule,
    NavigationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToplistModule,
    AddArticleModule
  ],
  providers: [WikipediaAPIService, DatabaseApiService, AboutUsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
