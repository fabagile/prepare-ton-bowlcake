import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IngredientComponent } from './models/ingredient/ingredient.component';
import { BowlcakeComponent } from './models/bowlcake/bowlcake.component';


@NgModule({
  declarations: [
    IngredientComponent,
    BowlcakeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
