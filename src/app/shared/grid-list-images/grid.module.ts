import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';
import { MaterialModule } from 'src/app/mat-index';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [GridListComponent]
})
export class GridModule { }
