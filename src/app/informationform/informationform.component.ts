import {Component} from '@angular/core';
import {Person} from '../person';
import {ActivatedRoute, CanDeactivate, Router} from '@angular/router';
import {CanComponentDeactivate} from '../router-guard.service';


@Component({
  selector: 'app-informationform',
  templateUrl: './informationform.component.html',
  styleUrls: ['./informationform.component.css'],

})

export class InformationformComponent implements CanComponentDeactivate {

  public person: Person = new Person();
  private isEdit = false;

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

  public canDeactivate() {
    return this.isEdit;
  }

  private usexChange(event) {
    const value = event.target.value;
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
    this.isEdit = false;
    const person = JSON.parse(localStorage.getItem('personEntity'));
    if (!(person.uname === this.person.uname) || !(person.usex === this.person.usex) || !(person.uage === this.person.uage)
      || !(person.utel === this.person.utel) || !(person.uaddress === this.person.uaddress)) {
      alert('信息已更改，未保存！');
    } else {
      alert('信息未更改！');
    }
    this.unsave(false);
  }

  private unsave(val) {
  }

  public save(a: boolean) {
    this.isEdit = true;
    localStorage.setItem('personEntity', JSON.stringify(this.person));
    this.router.navigate(['/persondetail'], {queryParams: {'person': JSON.stringify(this.person)}});
  }
}
