import {Injectable} from '@angular/core';

@Injectable()
export class MomentMoodMoodService {
    moodArr = ['开心', '喜悦', '狂喜', '尽情', '快乐', '愉悦', '畅快', '欣喜', '幸福', '得意'];
    moodArr2 = [];

    public count = 0;

    getMomentMood() {
        const index = Math.floor(Math.random() * 9);
        const moment = this.moodArr[index];
        this.moodArr2.push(moment);
        this.count ++;
    }

    constructor() {
    }
}
