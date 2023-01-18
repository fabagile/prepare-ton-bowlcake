import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { AddIngredientComponent } from 'src/app/pages/add-ingredient/add-ingredient.component';
import { HandleIngredientComponent } from 'src/app/pages/handle-ingredient/handle-ingredient.component';
import { IngredientsListComponent } from 'src/app/pages/ingredients-list/ingredients-list.component';
import { IngredientDetailComponent } from 'src/app/pages/ingredient-detail/ingredient-detail.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [AddIngredientComponent, HandleIngredientComponent, IngredientsListComponent, IngredientDetailComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule, SharedModule
  ],
  exports:[AddIngredientComponent, HandleIngredientComponent, IngredientsListComponent, IngredientDetailComponent]
})
export class IngredientsModule { }
