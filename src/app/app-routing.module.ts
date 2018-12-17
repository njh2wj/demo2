import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {InformationformComponent} from './informationform/information-form.component';
import {RouterGuardService} from './router-guard.service';
import {UserExerciseComponent} from './user-exercise/user-exercise.component';
import {ExerciseOneComponent} from './user-exercise/exercise-one/exercise-one.component';
import {ExerciseTwoComponent} from './user-exercise/exercise-two/exercise-two.component';
import {ExerciseThreeComponent} from './user-exercise/exercise-three/exercise-three.component';
import {ExerciseFourComponent} from './user-exercise/exercise-four/exercise-four.component';

const appRoutes: Routes = <Routes>[
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full',
    },
    {
        path: 'person-detail',
        component: PersonDetailComponent,
        canActivate: [RouterGuardService],
    },
    {
        path: 'index',
        component: IndexComponent,
    },
    {
        path: 'information-add',
        component: InformationformComponent,
        canDeactivate: [RouterGuardService],
        canActivate: [RouterGuardService],
    },
    {
        path: 'information-edit',
        component: InformationformComponent,
        canDeactivate: [RouterGuardService],
        canActivate: [RouterGuardService],
    },
    {
        path: 'user-exercise',
        component: UserExerciseComponent,
        children: [
            {
                path: 'exercise-one',
                component: ExerciseOneComponent
            },
            {
                path: 'exercise-two',
                component: ExerciseTwoComponent
            },
            {
                path: 'exercise-three',
                component: ExerciseThreeComponent
            },
            {
                path: 'exercise-four',
                component: ExerciseFourComponent
            }
        ],
        canActivate: [RouterGuardService],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
