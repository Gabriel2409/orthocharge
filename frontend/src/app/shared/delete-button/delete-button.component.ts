import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent {
  canDelete: boolean = false;

  @Output('delete') delete = new EventEmitter<boolean>();

  prepareForDelete() {
    this.canDelete = true;
  }
  cancel() {
    this.canDelete = false;
  }
  deleteObject() {
    this.delete.emit(true);
    this.canDelete = false;
  }
}
