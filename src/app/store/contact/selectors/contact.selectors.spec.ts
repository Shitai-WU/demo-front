import * as fromContact from '../reducers/contact.reducer';
import { ContactEntity } from '../models/contact.entity';
import { selectAllContacts } from './contact.selectors';

describe('Contact Selectors', () => {
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
  const initialState: fromContact.State = fromContact.adapter.setAll([mockContactEntity], fromContact.initialState);

  it('should select all contacts', () => {
    const result = selectAllContacts.projector(initialState);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual('contact 1');
  });
});
