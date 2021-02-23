import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../mat-index';
import { GridModule } from './grid-list-images/grid.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    GridModule
  ],
  exports: [GridModule]
})
export class SharedModule { }
