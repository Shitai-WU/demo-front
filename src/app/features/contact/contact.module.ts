import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContactListContainerComponent } from './contact-list-container/contact-list-container.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactDetailContainerComponent } from './contact-detail-container/contact-detail-container.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactFormDialogComponent } from './contact-form-dialog/contact-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '../../shared';


@NgModule({
  declarations: [
    ContactListContainerComponent,
    ContactDetailContainerComponent,
    ContactListComponent,
    ContactFormDialogComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSortModule,
    SharedModule,
  ],
  providers: [DatePipe],
})
export class ContactModule {
}
