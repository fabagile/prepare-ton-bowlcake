import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatChipsModule
  ],
})
export class MaterialModule {}
