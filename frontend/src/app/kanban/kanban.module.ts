import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { KanbanRoutingModule } from './kanban-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    KanbanRoutingModule,
    MatButtonToggleModule,
    MatDialogModule,
    SharedModule,
  ],
})
export class KanbanModule {}
