import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsService } from '../shared/about-us.service';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent
  ],
  providers: [AboutUsService],
  exports: [
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
