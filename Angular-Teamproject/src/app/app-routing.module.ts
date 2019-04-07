import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './navigation/landing-page/landing-page.component';
import {AddNewArticleComponent} from './add-article/add-new-article/add-new-article.component';
import {AritcleListComponent} from './ratinglist/aritcle-list/aritcle-list.component';
import {TopTenComponent} from './toplist/top-ten/top-ten.component';


const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home', component: LandingPageComponent},
    {path: 'toplist', component: TopTenComponent},
    {path: 'rating', component: AritcleListComponent},
    {path: 'addarticle', component: AddNewArticleComponent},
    // {path: 'About us', component: StridaEvoComponent},
];

@NgModule({
	  imports: [RouterModule.forRoot(routes)],
	  exports: [RouterModule]
})
export class AppRoutingModule { }
