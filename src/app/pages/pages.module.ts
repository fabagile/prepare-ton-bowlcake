import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { HandleIngredientComponent } from './handle-ingredient/handle-ingredient.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';


@NgModule({
  declarations: [
    // AddIngredientComponent,
    // HandleIngredientComponent,
    // IngredientsListComponent,
    // IngredientDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
