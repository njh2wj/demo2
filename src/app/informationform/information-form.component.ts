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
        this.route.queryParams.subscribe(params => {
            if (params) {
                this.person.uname = params['uname'];
                this.person.usex = params['usex'];
                this.person.uage = params['uage'];
                this.person.uaddress = params['uaddress'];
                this.person.utel = params['utel'];
                this.isEdit = true;
            } else {
                this.isEdit = false;
            }
        });
    }

    public onUsexChange(event) {
        const value = event.target.value;
        this.person.usex = value;
        console.log(value);
    }

    public onUnameValBlur(event) {
        const value = event.target.value;
        const reg = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    public onAgeValBlur(event) {
        const value = event.target.value;
        const reg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    public onCancelBtnClick() {
        const person = JSON.parse(localStorage.getItem('personEntity'));
        if (!(person.uname === this.person.uname) || !(person.usex === this.person.usex) || !(person.uage === this.person.uage)
            || !(person.utel === this.person.utel) || !(person.uaddress === this.person.uaddress)) {
            alert('信息已更改，未保存！');
        } else {
            alert('信息未更改！');
        }
    }

    public onSaveBtnClick(a: boolean) {
        localStorage.setItem('personEntity', JSON.stringify(this.person));
        this.router.navigate(['/person-detail'], {queryParams: {'person': JSON.stringify(this.person)}});
    }

    public canDeactivate() {
        return this.isEdit;
    }
}
