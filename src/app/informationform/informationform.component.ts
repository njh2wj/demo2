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
  unameVal(event){
    var value=event.target.value;
    const reg= /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
    if(reg.test(value)){
      return true;
    }else{
      return false;
    }
  }
  ageVal(event){
    var value=event.target.value;
    const reg= /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
    if(reg.test(value)){
      return true;
    }else{
      return false;
    }
  }

  cancel(){
    const person = JSON.parse(localStorage.getItem('personEntity'));
    if(!(person===this.person)) {
      alert("信息已更改，未保存！");
    }
    this.unsave(false);
  }

  public unsave(val){
    this.send.emit(val);
   }

  public save(a: boolean) {
    if (!isNullOrUndefined(this.person.uname) && !isNullOrUndefined(this.person.uage) && !isNullOrUndefined(this.person.usex) && !isNullOrUndefined(this.person.utel) && !isNullOrUndefined(this.person.uaddress)) {
      localStorage.setItem('personEntity', JSON.stringify(this.person));
      this.send.emit(!a);
    }
    else {
      alert("请补全信息！");
      return;
    }
  }
}
