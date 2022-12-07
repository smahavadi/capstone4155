import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutNotifComponent} from './logout-notif/logout-notif.component';
import {LookupInspectorsComponent} from './lookup-inspectors/lookup-inspectors.component';
import {InspectorListComponent} from './inspectorlist/inspector-list.component';
import {ScheduleInspectionComponent} from './schedule-inspection/schedule-inspection.component';
import {SubmissionNotifComponent} from './submission-notif/submission-notif.component';
import {InspectorProfileComponent} from './inspector-profile/inspector-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutNotifComponent,
    LookupInspectorsComponent,
    InspectorListComponent,
    ScheduleInspectionComponent,
    SubmissionNotifComponent,
    InspectorProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
