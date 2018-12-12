import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {

  person: Person = new Person();

  constructor(private router: Router) {
  }
  ngOnInit() {
    const newPerson = localStorage.getItem('personEntity');
    console.log(newPerson)
    if (!newPerson) {
      this.router.navigate(['informationform']);
    }
    const user = JSON.parse(newPerson);
    this.person = user;
  }

  public newPerson() {
    this.person = new Person();
  }

  public _update() {
    this.router.navigate(['/informationform'], {
      queryParams: this.person
    });
  }

}
