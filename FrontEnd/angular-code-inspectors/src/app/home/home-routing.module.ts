import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterComponent } from 'src/app/register/register.component';

const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
    children: [{
        path: 'register',
        component: RegisterComponent
    },
    ]
}];

@NgModule({
    imports: [
      RouterModule,
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })

export class HomeRoutingModule {}

