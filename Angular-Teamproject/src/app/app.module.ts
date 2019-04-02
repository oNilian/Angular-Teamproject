import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RatinglistModule} from './ratinglist/ratinglist.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RatinglistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

