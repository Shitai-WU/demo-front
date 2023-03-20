import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningDialogComponent } from './warning-dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    WarningDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [WarningDialogComponent],
})
export class SharedModule {
}
