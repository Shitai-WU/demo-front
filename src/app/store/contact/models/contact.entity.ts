import { Contact } from '../../../core';

export interface Address {
  address1: string;
  address2: string | null;
  address3: string | null;
}

export interface ContactEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  birthday: Date;
  address: Address;
}

export const fromContact = (contact: Contact): ContactEntity => ({
  id: contact.id,
  firstName: contact.firstName,
  lastName: contact.lastName,
  email: contact.email,
  telephone: contact.telephone,
  birthday: contact.birthday,
  address: {
    address1: contact.address1,
    address2: contact.address2,
    address3: contact.address3,
  },
});

export const toContact = (contactEntity: ContactEntity): Contact => ({
  id: contactEntity.id,
  firstName: contactEntity.firstName,
  lastName: contactEntity.lastName,
  email: contactEntity.email,
  telephone: contactEntity.telephone,
  birthday: contactEntity.birthday,
  address1: contactEntity.address.address1,
  address2: contactEntity.address.address2,
  address3: contactEntity.address.address3,
});
