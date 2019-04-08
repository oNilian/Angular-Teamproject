import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './navigation/landing-page/landing-page.component';
import {AddNewArticleComponent} from './add-article/add-new-article/add-new-article.component';
import {AritcleListComponent} from './ratinglist/aritcle-list/aritcle-list.component';
import {TopTenComponent} from './toplist/top-ten/top-ten.component';
// import {AboutUsComponent} from './navigation/about-us/AboutUsComponent';


const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'Home', component: LandingPageComponent},
    {path: 'Toplist', component: TopTenComponent},
    {path: 'Rating', component: AritcleListComponent},
    {path: 'AddArticle', component: AddNewArticleComponent},
    // {path: 'Aboutus', component: AboutUsComponent},
];

@NgModule({
	  imports: [RouterModule.forRoot(routes)],
	  exports: [RouterModule]
})
export class AppRoutingModule { }
