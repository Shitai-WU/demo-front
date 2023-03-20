export interface CreateContact {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  birthday: Date;
  address1: string;
  address2: string | null;
  address3: string | null;
}

export interface Contact extends CreateContact {
  id: string;
}
