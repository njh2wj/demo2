import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {InformationformComponent} from './informationform/information-form.component';
import {RouterGuardService} from './router-guard.service';

const appRoutes: Routes = <Routes>[
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: 'person-detail',
    component: PersonDetailComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'information-form',
    component: InformationformComponent,
    canDeactivate: [RouterGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
