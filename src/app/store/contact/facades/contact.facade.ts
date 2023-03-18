import { Store } from "@ngrx/store";
import { contactActions } from "../actions/contact.actions";
import { Contact, CreateContact } from "../../../core";
import { getSelectedContact, selectAllContacts } from "../selectors/contact.selectors";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactFacade {
  allContact$ = this.store.select(selectAllContacts);
  selectedContact$ = this.store.select(getSelectedContact);

  constructor(private store: Store) {
  }

  loadContacts(): void {
    this.store.dispatch(contactActions.loadContacts());
  }

  findContact(id: string): void {
    this.store.dispatch(contactActions.findContact({id}));
  }

  addContact(createContact: CreateContact): void {
    this.store.dispatch(contactActions.addContact({createContact}));
  }

  updateContact(contact: Contact): void {
    this.store.dispatch(contactActions.updateContact({contact}));
  }

  deleteContact(id: string): void {
    this.store.dispatch(contactActions.deleteContact({id}));
  }
}
