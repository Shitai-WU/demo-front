import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContact from '../reducers/contact.reducer';
import { adapter } from '../reducers/contact.reducer';
import { toContact } from '../models/contact.entity';

const selectContactState = createFeatureSelector<fromContact.State>(
  fromContact.contactFeatureKey,
);

const entitySelectors = adapter.getSelectors();

export const selectAllContacts = createSelector(
  selectContactState, (state) => entitySelectors.selectAll(state).map(toContact),
);

const selectEntities = createSelector(
  selectContactState, (state) => state.entities,
);

const getSelectedId = createSelector(
  selectContactState, (state) => state.selectedId,
);

export const getSelectedContact = createSelector(
  selectEntities, getSelectedId, (entities, selectedId) => selectedId && entities[selectedId] && toContact(entities[selectedId]!),
);
