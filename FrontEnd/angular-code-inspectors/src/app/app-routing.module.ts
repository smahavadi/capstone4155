import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from "./login/login.component";
import {LookupInspectorsComponent} from "./lookup-inspectors/lookup-inspectors.component";
import {InspectorListComponent} from "./inspector-list/inspector-list.component";
import {InspectorProfileComponent} from "./inspector-profile/inspector-profile.component";
import {LogoutNotifComponent} from "./logout-notif/logout-notif.component";
import {ScheduleInspectionComponent} from "./schedule-inspection/schedule-inspection.component";
import {SubmissionNotifComponent} from "./submission-notif/submission-notif.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutNotifComponent},
  {path: 'lookup', component: LookupInspectorsComponent},
  {path: 'inspectors', component: InspectorListComponent},
  {path: 'profile', component: InspectorProfileComponent},
  {path: 'schedule', component: ScheduleInspectionComponent},
  {path: 'submitted', component: SubmissionNotifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

