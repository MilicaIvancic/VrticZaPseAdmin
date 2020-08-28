import { UserDog } from './user-dog';

export class UserDetails {

  firstName: string;
  surname: string;
  userSex: number | string;
  email: string;
  birthDate: Date;
  roleName: string;
  dogNames: UserDog[];
  cityName: string;
  street: string;
  streetNumber: string;
  id: number;
  phoneNumbers: string[];
}
