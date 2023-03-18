export interface CreateContact {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  address1: string;
  address2: string;
  address3: string;
}

export interface Contact extends CreateContact {
  id: string;
}
