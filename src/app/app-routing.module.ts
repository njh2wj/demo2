import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {PersondetailComponent} from './persondetail/persondetail.component';
import {InformationformComponent} from './informationform/informationform.component';
import {RouterGuardService} from './router-guard.service';

const appRoutes: Routes = <Routes>[
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: 'persondetail',
    component: PersondetailComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'informationform',
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
