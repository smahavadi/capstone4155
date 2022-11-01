import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
      RouterModule,
      HomeRoutingModule,
    ],
  })

export class HomeModule {}

