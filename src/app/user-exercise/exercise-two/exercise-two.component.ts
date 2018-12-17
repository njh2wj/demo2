import {Component, OnDestroy, OnInit} from '@angular/core';
import {MomentMoodMoodService} from '../../moment-mood.service';
import {GlobalMoodService} from '../../global-mood.service';
import {interval, Subscription} from 'rxjs/index';

@Component({
    selector: 'app-exercise-two',
    templateUrl: './exercise-two.component.html',
    styleUrls: ['./exercise-two.component.css'],
    providers: [MomentMoodMoodService]
})
export class ExerciseTwoComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    constructor(private mmService: MomentMoodMoodService, private glmService: GlobalMoodService) {
       this.subscription = interval(2000).subscribe(() => {
           console.log('component:', mmService.count);
       });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onClickMomentMood() {
        this.mmService.getMomentMood();
    }
    onClickGlobalMood() {
       this.glmService.getGlobalMood();
    }
    ngOnInit() {

    }

}
