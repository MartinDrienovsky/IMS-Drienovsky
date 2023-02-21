import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  subject: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
/* Defining function for poped up dialog. If we click somewhere dialog windows will disappear. */
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
