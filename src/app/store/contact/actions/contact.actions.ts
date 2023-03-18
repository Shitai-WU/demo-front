import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ContactEntity } from "../models/contact.entity";
import { Contact, CreateContact } from "../../../core";

export const contactActions = createActionGroup({
  source: 'Contact',
  events: {
    'Load Contacts': emptyProps(),
    'Load Contacts Success': props<{ contacts: ContactEntity[] }>(),
    'Load Contacts Failure': props<{ error: any }>(),
    'Find Contact': props<{ id: string }>(),
    'Find Contact Success': props<{ contact: ContactEntity }>(),
    'Find Contact Failure': props<{ error: any }>(),
    'Add Contact': props<{ createContact: CreateContact }>(),
    'Add Contact Success': props<{ contact: ContactEntity }>(),
    'Add Contact Failure': props<{ error: any }>(),
    'Delete Contact': props<{ id: string }>(),
    'Delete Contact Success': props<{ id: string }>(),
    'Delete Contact Failure': props<{ error: any }>(),
    'Update Contact': props<{ contact: Contact }>(),
    'Update Contact Success': props<{ contact: ContactEntity }>(),
    'Update Contact Failure': props<{ error: any }>(),
  }
});
