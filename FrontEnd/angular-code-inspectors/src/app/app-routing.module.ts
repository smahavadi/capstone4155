import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes =[{
    path: 'home',
    component: HomeComponent,
    children: [
        {path: 'register',
        component: RegisterComponent
    }
    ]
}];

@NgModule({ imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })], exports: [RouterModule]})

export class AppRoutingModule{}

