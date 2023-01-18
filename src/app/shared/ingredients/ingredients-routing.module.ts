import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from 'src/app/pages/add-ingredient/add-ingredient.component';
import { HandleIngredientComponent } from 'src/app/pages/handle-ingredient/handle-ingredient.component';
import { IngredientDetailComponent } from 'src/app/pages/ingredient-detail/ingredient-detail.component';
import { IngredientsListComponent } from 'src/app/pages/ingredients-list/ingredients-list.component';
// import { IngredientsModule } from './ingredients.module';

const routes: Routes = [
  // {path: "", redirectTo:"handle", pathMatch: "full"},

  {path: "add", component: AddIngredientComponent},
  {path: "handle/:id", component: HandleIngredientComponent},
  {path: "", component: IngredientsListComponent},
  {path: ":id", component: IngredientDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
