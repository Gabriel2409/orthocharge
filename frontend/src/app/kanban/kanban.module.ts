import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    BoardListComponent,
    BoardComponent
  ],
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
