import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isEmailControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.email
  ]));

  constructor(private modalService: NgbModal, ) { }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  ngOnInit() {
  }

}
