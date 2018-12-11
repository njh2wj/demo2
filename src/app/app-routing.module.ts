import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InforDetailComponent } from './infor-detail/infor-detail.component';
import { IndexComponent } from './index/index.component';
import { PersondetailComponent } from './persondetail/persondetail.component';
import {InformationformComponent} from './informationform/informationform.component';

// const routes: Routes = [];
const appRoutes: Routes = <Routes>[
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: 'persondetail',
    component: PersondetailComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'informationform',
    component: InformationformComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
