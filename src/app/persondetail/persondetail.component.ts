import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Person} from "../person";

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {

  person: Person = new Person();

  constructor() { }
 @Output() bb=new EventEmitter();
  ngOnInit() {
    const  newPerson = localStorage.getItem('personEntity');
    const  user = JSON.parse(newPerson);
    this.person=user;
  }
   public _update(){
    this.bb.emit(this.person);
    console.log(this.person);
   }
}
