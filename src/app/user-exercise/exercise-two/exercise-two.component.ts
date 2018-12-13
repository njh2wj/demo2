import {Component, OnInit} from '@angular/core';
import {MomentMoodMoodService} from '../../moment-mood.service';
import {GlobalMoodService} from '../../global-mood.service';

@Component({
    selector: 'app-exercise-two',
    templateUrl: './exercise-two.component.html',
    styleUrls: ['./exercise-two.component.css'],
    providers: [MomentMoodMoodService]
})
export class ExerciseTwoComponent implements OnInit {

    constructor(private mmService: MomentMoodMoodService, private glmService: GlobalMoodService) {
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
