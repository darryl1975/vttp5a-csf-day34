import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {


  result!: boolean;

  messageText: any = "Are you sure you want to delete this record?";
  cancelText: any = "Cancel";
  confirmText: any = "Delete";

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<DeleteDialogComponent>) {
    if (data) {
      this.messageText = data.messageTxt;
      this.cancelText = data.cancelTxt;
      this.confirmText = data.confirmTxt;
    }
  }
  cancelled() {
    this.dialogRef.close(false);
  }

  confirmed() {
    this.dialogRef.close(true);
  }
}
