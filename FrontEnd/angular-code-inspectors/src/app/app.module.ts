import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutNotifComponent } from './logout-notif/logout-notif.component';
import { LookupInspectorsComponent } from './lookup-inspectors/lookup-inspectors.component';
import { InspectorlistComponent } from './inspectorlist/inspectorlist.component';
import { ScheduleInspectionComponent } from './schedule-inspection/schedule-inspection.component';
import { SubmissionNotifComponent } from './submission-notif/submission-notif.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutNotifComponent,
    LookupInspectorsComponent,
    InspectorlistComponent,
    ScheduleInspectionComponent,
    SubmissionNotifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
