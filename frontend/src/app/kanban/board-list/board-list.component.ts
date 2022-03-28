import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { BoardDialogComponent } from '../dialogs/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: Board[] = [];
  userBoardsSubscription: Subscription | null = null;
  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  ngOnDestroy(): void {
    if (this.userBoardsSubscription) this.userBoardsSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.userBoardsSubscription = this.boardService.getUserBoards().subscribe({
      next: (boards) => (this.boards = boards),
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    // sorts in frontend
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    // sorts in backend
    this.boardService.sortBoards(this.boards);
  }
  openBoardDialog() {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      data: {},
    });
    dialogRef.afterClosed().subscribe({
      next: (result: string | undefined) => {
        if (result) {
          this.boardService.createBoard({
            title: result,
            priority: this.boards.length,
          });
        }
      },
    });
  }
}
