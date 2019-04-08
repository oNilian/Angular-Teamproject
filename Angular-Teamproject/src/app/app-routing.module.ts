import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AritcleListComponent} from './ratinglist/aritcle-list/aritcle-list.component';
import {TopTenComponent} from './toplist/top-ten/top-ten.component';
import {AddNewArticleComponent} from './add-article/add-new-article/add-new-article.component';
import {LandingPageComponent} from './navigation/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'toptencomponent', component: TopTenComponent},
  {path: 'rating', component: AritcleListComponent},
  {path: 'addarticle', component: AddNewArticleComponent},
  {path: '', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
