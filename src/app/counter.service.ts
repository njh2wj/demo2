import {Injectable} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    public second = 0;
    showStop = true;
    start = '开始';
    private contiuneSubscription: Subscription;

    constructor() {
    }

    onClickStartBtn() {
        this.showStop = false;
        if (this.start === '开始') {
            this.start = '暂停';
            this.contiuneSubscription = interval(1000).subscribe(() => {
                this.second++;
            });
        } else if (this.start === '暂停') {
            this.start = '继续';
            this.contiuneSubscription.unsubscribe();
        } else if (this.start === '继续') {
            this.start = '暂停';
            this.contiuneSubscription = interval(1000).subscribe(() => {
                this.second++;
            });
        }

    }

    onClickStopBtn() {
        this.second = 0;
        this.showStop = true;
        this.start = '开始';
        this.contiuneSubscription.unsubscribe();
    }
}
