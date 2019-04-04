import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AddNewArticleComponent implements OnInit {
  linkName: string = '';
  realLink: string = '';

  nameControl = new FormControl([
    Validators.required,
    Validators.minLength(10)
  ]);
  linkControl = new FormControl([
    Validators.required,
    Validators.minLength(10)
  ]);

  constructor() {
  }

  ngOnInit() {
    this.linkName = this.nameControl.value;
    this.realLink = this.linkControl.value;

  }

  onAddLinkClick() {

  }
}
