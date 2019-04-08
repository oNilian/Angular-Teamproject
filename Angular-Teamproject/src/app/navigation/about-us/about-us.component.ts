import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../../shared/about-us.service';
import { AboutUs } from '../../shared/about-us';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [AboutUsService],
})
export class AboutUsComponent implements OnInit {
  aboutUsService: AboutUsService;
  data: AboutUs[] = null;

  constructor(aboutUsService: AboutUsService) {
    this.aboutUsService = aboutUsService;
  }


  ngOnInit() {
    this.data = this.aboutUsService.getData();
  }

}
