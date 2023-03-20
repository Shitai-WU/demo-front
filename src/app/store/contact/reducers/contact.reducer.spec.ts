import { initialState, reducer } from './contact.reducer';
import { contactActions } from '../actions/contact.actions';
import { ContactEntity } from '../models/contact.entity';
import { Action } from '@ngrx/store';

describe('Contact Reducer', () => {
  const mockContactEntity: ContactEntity = {
    id: 'contact 1',
    firstName: 'first name',
    lastName: 'last name',
    telephone: '0123456789',
    email: 'example@email.com',
    birthday: new Date('1995-07-21'),
    address: {
      address1: '1 road',
      address2: null,
      address3: null,
    },
  };

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('load contacts', () => {
    it('should update loading status in contact state', () => {
      const action = contactActions.loadContacts;

      const state = reducer(initialState, action);

      expect(state).not.toBe(initialState);
      expect(state.loading).toBeTruthy();
    });

    it('success should update contact state', () => {
      const action = contactActions.loadContactsSuccess({contacts: [mockContactEntity]});

      const state = reducer(initialState, action);

      expect(state).not.toBe(initialState);
      expect(state.loaded).toBeTruthy();
      expect(state.ids.length).toBe(1);
    });

    it('success should update contact state', () => {
      const stateWithOneContact = reducer(initialState, contactActions.loadContactsSuccess({contacts: [mockContactEntity]}));

      const action = contactActions.loadContactsFailure;

      const state = reducer(stateWithOneContact, action);

      expect(state.loaded).toBeTruthy();
      expect(state.ids.length).toBe(0);
    });
  });
});
