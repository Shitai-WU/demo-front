import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ContactEffects } from './contact.effects';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { getSelectedContact } from '../selectors/contact.selectors';
import { Contact, ContactService } from '../../../core';
import { contactActions } from '../actions/contact.actions';
import { fromContact } from '../models/contact.entity';
import SpyObj = jasmine.SpyObj;


describe('ContactEffects', () => {
  const mockContact: Contact = {
    id: 'contact 1',
    firstName: 'first name',
    lastName: 'last name',
    telephone: '0123456789',
    email: 'example@email.com',
    birthday: new Date('1995-07-21'),
    address1: '1 road',
    address2: null,
    address3: null,
  };
  let actions$: Observable<Action>;
  let effects: ContactEffects;
  let mockContactService: SpyObj<ContactService>;

  beforeEach(() => {
    mockContactService = jasmine.createSpyObj('ContactService', ['loadContacts', 'findContact', 'addContact', 'updateContact', 'deleteContact']);

    TestBed.configureTestingModule({
      providers: [
        ContactEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [
            {
              selector: getSelectedContact,
              value: mockContact,
            },
          ],
        }),
        {
          provide: ContactService,
          useValue: mockContactService,
        },
      ],
    });

    effects = TestBed.inject(ContactEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should emit loadContactsSuccess action when loadContacts succeeds', () => {
    mockContactService.loadContacts.and.returnValue(of([]));

    actions$ = of(contactActions.loadContacts);

    effects.loadContacts$.subscribe(action =>
      expect(action).toEqual(contactActions.loadContactsSuccess({contacts: []})));
  });

  it('should emit findContactSuccess action when findContact succeeds', () => {
    mockContactService.findContact.and.returnValue(of(mockContact));

    actions$ = of(contactActions.findContact);

    effects.findContact$.subscribe(action =>
      expect(action).toEqual(contactActions.findContactSuccess({contact: fromContact(mockContact)})));
  });

  it('should emit addContactSuccess action when addContact succeeds', () => {
    mockContactService.addContact.and.returnValue(of(mockContact));

    actions$ = of(contactActions.addContact);

    effects.addContact$.subscribe(action =>
      expect(action).toEqual(contactActions.addContactSuccess({contact: fromContact(mockContact)})));
  });

  it('should emit updateContactSuccess action when updateContact succeeds', () => {
    mockContactService.updateContact.and.returnValue(of(mockContact));

    actions$ = of(contactActions.updateContact);

    effects.updateContact$.subscribe(action =>
      expect(action).toEqual(contactActions.updateContactSuccess({contact: fromContact(mockContact)})));
  });

  it('should emit deleteContactSuccess action when deleteContact succeeds', () => {
    mockContactService.deleteContact.and.returnValue(of());

    actions$ = of(contactActions.deleteContact({id: 'id'}));

    effects.deleteContact$.subscribe(action =>
      expect(action).toEqual(contactActions.deleteContactSuccess({id: 'id'})));
  });
});
