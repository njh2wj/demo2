import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Person} from "./person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Personal Information';
  isEdit = true;

  public personDetail: Person = new Person();

  constructor() {
  }

  onbb(event: Person) {
    this.personDetail = event;
    this.isEdit = true;
  }

  ngOnInit() {
    const person = localStorage.getItem('personEntity');
    const personEntity = JSON.parse(person);
    if (personEntity != null) {
      this.isEdit = false;
    }
  }
}
