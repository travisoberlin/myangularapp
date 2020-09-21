import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PostComponent } from './post/post.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [TableComponent, PostComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
