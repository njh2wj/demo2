import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {CounterService} from '../../counter.service';

@Component({
    selector: 'app-exercise-three',
    templateUrl: './exercise-three.component.html',
    styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit , OnDestroy {
    nowTime: Date;
    @ViewChild('startBtn') startBtn: ElementRef;

    constructor(private cService: CounterService) {
    }
    private secondsCounter: Subscription;
    ngOnInit() {
        this.nowTime = new Date();
        // const secondsCounter = interval(1000);
        this.secondsCounter = interval(1000).subscribe(() => this.nowTime = new Date());
    }
    ngOnDestroy(): void {
        this.secondsCounter.unsubscribe();
    }
}
