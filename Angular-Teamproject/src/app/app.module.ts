import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RatinglistModule} from './ratinglist/ratinglist.module';
import {SharedModule} from './shared/shared.module';
import {FormsModule} from '@angular/forms';
import {WikipediaAPIService} from './shared/wikipedia-api.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatinglistModule,
    SharedModule,
    FormsModule,
    HttpClientModule],
  providers: [WikipediaAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

