import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationformComponent } from './informationform/informationform.component';

import { PersondetailComponent } from './persondetail/persondetail.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { InforDetailComponent } from './infor-detail/infor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationformComponent,

    PersondetailComponent,

    IndexComponent,

    InforDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
