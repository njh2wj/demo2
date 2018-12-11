import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';
import {Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-informationform',
  templateUrl: './informationform.component.html',
  styleUrls: ['./informationform.component.css']
})

export class InformationformComponent implements OnInit {

  // @Input() public person: Person = new Person();
  // @Input() public isCreate = true;
  public person: Person = new Person();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(value => {
      if (value) {
        this.person.uname = value['uname'];
        this.person.usex = value['usex'];
        this.person.uage = value['uage'];
        this.person.uaddress = value['uaddress'];
        this.person.utel = value['utel'];
      }
    });
  }

  ngOnInit() {
  }

  private usexChange(event) {
    const value = event.target.value;
    // this.person.usex = Number(value);
  }

  private unameVal(event) {
    const value = event.target.value;
    const reg = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
    if (reg.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  private ageVal(event) {
    const value = event.target.value;
    const reg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
    if (reg.test(value)) {
      return true;
    } else {
      return false;
    }
  }

  private cancel() {
    const person = JSON.parse(localStorage.getItem('personEntity'));
    if (!(person.uname === this.person.uname) || !(person.usex === this.person.usex) || !(person.uage === this.person.uage) || !(person.utel === this.person.utel) || !(person.uaddress === this.person.uaddress)) {
      alert('信息已更改，未保存！');
    } else {
      alert('信息未更改！');
    }
    this.unsave(false);
  }

  private unsave(val) {
    // this.send.emit(val);
  }

  public save(a: boolean) {
    localStorage.setItem('personEntity', JSON.stringify(this.person));
    this.router.navigate(['/persondetail'], {queryParams: {'person': JSON.stringify(this.person)}});
  }
}
