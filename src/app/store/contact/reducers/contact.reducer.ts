import { createFeature, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { ContactEntity } from "../models/contact.entity";
import { contactActions } from "../actions/contact.actions";


export interface State extends EntityState<ContactEntity> {
  selectedId: string | null;
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<ContactEntity> = createEntityAdapter<ContactEntity>();

export const initialState: State = adapter.getInitialState({
  selectedId: null,
  loaded: false,
  loading: false,
});


export const reducer = createReducer(
  initialState,
  on(contactActions.loadContacts, (state) => ({...state, loading: true})),
  on(contactActions.loadContactsSuccess, (state, action) => adapter.setAll(action.contacts, {
    ...state,
    loading: false,
    loaded: true,
  })),
  on(contactActions.loadContactsFailure, (state) => adapter.removeAll({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(contactActions.findContact, (state, action) => ({...state, selectedId: action.id})),
  on(contactActions.findContactSuccess, (state, action) => adapter.upsertOne(action.contact, state)),
  on(contactActions.findContactFailure, (state) => ({...state, selectedId: null})),
  on(contactActions.addContactSuccess, (state, action) => adapter.addOne(action.contact, state)),
  on(contactActions.updateContactSuccess, (state, action) => adapter.upsertOne(action.contact, state)),
  on(contactActions.deleteContactSuccess, (state, action) => adapter.removeOne(action.id, state)),
);

export const contactFeatureKey = 'contact';

export const contactFeature = createFeature({
  name: contactFeatureKey,
  reducer,
});

