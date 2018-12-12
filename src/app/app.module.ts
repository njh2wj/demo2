import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InformationformComponent} from './informationform/information-form.component';

import {PersonDetailComponent} from './person-detail/person-detail.component';
import {FormsModule} from '@angular/forms';
import {IndexComponent} from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationformComponent,
    PersonDetailComponent,
    IndexComponent,
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
