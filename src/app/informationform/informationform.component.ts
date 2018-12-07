import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person'
import {Output, EventEmitter} from "@angular/core";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-informationform',
  templateUrl: './informationform.component.html',
  styleUrls: ['./informationform.component.css']
})


export class InformationformComponent implements OnInit {

  @Input() public person: Person = new Person();


  constructor() {
  }

  @Output() send = new EventEmitter<boolean>();


  ngOnInit() {
    const person = localStorage.getItem('personEntity');
    if (person) {
      this.person = JSON.parse(person);
    }
    this.person.usex = 1;
  }

  usexChange(event){
    var value = event.target.value;
    this.person.usex = Number(value);
  }

  public save(a: boolean) {
    if (!isNullOrUndefined(this.person.uname) && !isNullOrUndefined(this.person.uage) && !isNullOrUndefined(this.person.usex) && !isNullOrUndefined(this.person.utel) && !isNullOrUndefined(this.person.uaddress)) {
      localStorage.setItem('personEntity', JSON.stringify(this.person));
      this.send.emit(!a)
    }
    else {
      alert("请补全信息！");
      return;
    }


  }
}
