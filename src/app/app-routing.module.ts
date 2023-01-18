import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"ingredients", loadChildren: ()=>import("./shared/ingredients/ingredients-routing.module").then(m=>m.IngredientsRoutingModule)},
  {path:"", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
