import {Component} from '@angular/core';
import {Person} from '../person';
import {ActivatedRoute, CanDeactivate, Router} from '@angular/router';
import {CanComponentDeactivate} from '../router-guard.service';


@Component({
    selector: 'app-informationform',
    templateUrl: './information-form.component.html',
    styleUrls: ['./information-form.component.css'],

})

export class InformationformComponent implements CanComponentDeactivate {
    private isEdit = false;
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

    private unsave(val) {
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

    public canDeactivate() {
        return this.isEdit;
    }

    public onCancelBtnClick() {
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


    public onSaveBtnClick(a: boolean) {
        this.isEdit = true;
        localStorage.setItem('personEntity', JSON.stringify(this.person));
        this.router.navigate(['/person-detail'], {queryParams: {'person': JSON.stringify(this.person)}});
    }
}
