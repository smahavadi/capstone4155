import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {RegisterComponent} from 'src/app/register/register.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { InspectorProfileComponent } from '../inspector-profile/inspector-profile.component';
import { InspectorlistComponent } from '../inspectorlist/inspectorlist.component';
import { LoginComponent } from '../login/login.component';
import { LogoutNotifComponent } from '../logout-notif/logout-notif.component';
import { LookupInspectorsComponent } from '../lookup-inspectors/lookup-inspectors.component';
import { ScheduleInspectionComponent } from '../schedule-inspection/schedule-inspection.component';
import { SubmissionNotifComponent } from '../submission-notif/submission-notif.component';

const routes: Routes =[
    {
    path: 'home',
    component: HomeComponent,
    children: [{
        path: 'register',
        component: RegisterComponent
    }
    ]
}];

@NgModule({
    declarations: [
      HeaderComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      LogoutNotifComponent,
      LookupInspectorsComponent,
      InspectorlistComponent,
      ScheduleInspectionComponent,
      SubmissionNotifComponent,
      InspectorProfileComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

export class HomeRoutingModule {}

