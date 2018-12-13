import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InformationformComponent} from './informationform/information-form.component';

import {PersonDetailComponent} from './person-detail/person-detail.component';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './index/index.component';
import { UserExerciseComponent } from './user-exercise/user-exercise.component';
import { ExerciseOneComponent } from './user-exercise/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './user-exercise/exercise-two/exercise-two.component';
import { MoneyChangePipe } from './user-exercise/exercise-one/money-change.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InformationformComponent,
    PersonDetailComponent,
    IndexComponent,
    UserExerciseComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    MoneyChangePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
