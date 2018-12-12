import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-persondetail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person = new Person();

  constructor(private router: Router) {
  }
  ngOnInit() {
    const newPerson = localStorage.getItem('personEntity');
    console.log(newPerson)
    if (!newPerson) {
      this.router.navigate(['information-form']);
    }
    const user = JSON.parse(newPerson);
    this.person = user;
  }

  public onNewPersonBtnClick() {
    this.person = new Person();
  }

  public onDataUpdate() {
    this.router.navigate(['information-form'], {
      queryParams: this.person
    });
  }
}
