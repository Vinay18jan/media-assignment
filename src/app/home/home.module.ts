import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
