import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface WaringDialogData {
  content: string;
}

@Component({
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss'],
})
export class WarningDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: WaringDialogData) {
  }
}
