import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { contactActions } from "../actions/contact.actions";
import { ContactService } from "../../../core/service/contact.service";
import { fromContact } from "../models/contact.entity";
import { Store } from "@ngrx/store";
import { getSelectedContact } from "../selectors/contact.selectors";


@Injectable()
export class ContactEffects {

  constructor(private actions$: Actions, private contactService: ContactService, private store: Store) {
  }

  loadContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(contactActions.loadContacts),
      switchMap(() => this.contactService.loadContacts()
        .pipe(
          map((contacts) => contacts.map(fromContact)),
          map((contacts) => contactActions.loadContactsSuccess({contacts})),
          catchError(error => of(contactActions.loadContactsFailure({error}))))
      )
    );
  });

  findContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(contactActions.findContact),
      withLatestFrom(this.store.select(getSelectedContact)),
      filter(([, selectedUser]) => !selectedUser),
      switchMap(([action]) => {
          return this.contactService.findContact(action.id)
            .pipe(
              map((contact) => fromContact(contact)),
              map((contact) => contactActions.findContactSuccess({contact})),
              catchError(error => of(contactActions.findContactFailure({error}))));
        }
      )
    );
  });

  addContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(contactActions.addContact),
      switchMap((action) => this.contactService.addContact(action.createContact)
        .pipe(
          map((contact) => fromContact(contact)),
          map((contact) => contactActions.findContactSuccess({contact})),
          catchError(error => of(contactActions.findContactFailure({error}))))
      )
    );
  });

  updateContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(contactActions.updateContact),
      switchMap((action) => this.contactService.updateContact(action.contact)
        .pipe(
          map((contact) => fromContact(contact)),
          map((contact) => contactActions.updateContactSuccess({contact})),
          catchError(error => of(contactActions.updateContactFailure({error}))))
      )
    );
  });

  deleteContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(contactActions.deleteContact),
      switchMap((action) => this.contactService.deleteContact(action.id)
        .pipe(
          map(() => contactActions.deleteContactSuccess({id: action.id})),
          catchError(error => of(contactActions.updateContactFailure({error}))))
      )
    );
  });
}
