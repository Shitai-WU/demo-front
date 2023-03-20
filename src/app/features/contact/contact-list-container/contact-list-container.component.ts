import { Component, OnInit } from '@angular/core';
import { ContactFacade } from '../../../store/contact';
import { MatDialog } from '@angular/material/dialog';
import {
  ContactFormDialogComponent,
  ContactFormDialogData,
} from '../contact-form-dialog/contact-form-dialog.component';
import { filter } from 'rxjs/operators';
import { Contact, CreateContact } from '../../../core';
import { WaringDialogData, WarningDialogComponent } from '../../../shared/warning-dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './contact-list-container.component.html',
  styleUrls: ['./contact-list-container.component.scss'],
})
export class ContactListContainerComponent implements OnInit {
  allContact$ = this.contactFacade.allContact$;

  constructor(private contactFacade: ContactFacade, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.contactFacade.loadContacts();
  }

  openCreateContactFormDialog(): void {
    this.dialog.open<ContactFormDialogComponent, ContactFormDialogData>(ContactFormDialogComponent, {
      maxWidth: '300px',
      data: {
        title: 'Create new contact',
      },
    })
      .afterClosed()
      .pipe(filter((data) => !!data))
      .subscribe((data: CreateContact) => this.contactFacade.addContact(data));
  }

  showContactDetail(id: string): void {
    this.contactFacade.findContact(id);
    this.router.navigate([id], {relativeTo: this.route});
  }

  openDeleteContactFormDialog(id: string): void {
    this.dialog.open<WarningDialogComponent, WaringDialogData>(WarningDialogComponent, {
      maxWidth: '300px',
      data: {
        content: 'Are you sure to delete this contact ?',
      },
    })
      .afterClosed()
      .pipe(filter((data) => !!data))
      .subscribe(() => this.contactFacade.deleteContact(id));
  }

  openEditContactFormDialog(contact: Contact): void {
    this.dialog.open<ContactFormDialogComponent, ContactFormDialogData>(ContactFormDialogComponent, {
      maxWidth: '300px',
      data: {
        title: `Edit contact of ${contact.firstName} ${contact.lastName}`,
        contact: contact,
      },
    })
      .afterClosed()
      .pipe(filter((data) => !!data))
      .subscribe((data: Contact) => this.contactFacade.updateContact(data));
  }
}
