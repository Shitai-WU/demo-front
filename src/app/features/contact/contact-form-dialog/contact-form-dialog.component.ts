import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../../core';

export interface ContactFormDialogData {
  contact?: Contact;
  title: string;
}

@Component({
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss'],
})
export class ContactFormDialogComponent {
  contactForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  emailControl: FormControl;
  telephoneControl: FormControl;
  birthdayControl: FormControl;
  address1Control: FormControl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ContactFormDialogData) {
    const contact = data.contact;

    this.firstNameControl = new FormControl(contact?.firstName, Validators.required);
    this.lastNameControl = new FormControl(contact?.firstName, Validators.required);
    this.emailControl = new FormControl(contact?.email, [Validators.required, Validators.email]);
    this.telephoneControl = new FormControl(contact?.telephone, Validators.required);
    this.birthdayControl = new FormControl(contact?.birthday, Validators.required);
    this.address1Control = new FormControl(contact?.address1, Validators.required);

    this.contactForm = new FormGroup({
      id: new FormControl(contact?.id),
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      telephone: this.telephoneControl,
      birthday: this.birthdayControl,
      address1: this.address1Control,
      address2: new FormControl(contact?.address2),
      address3: new FormControl(contact?.address3),
    });
  }
}
