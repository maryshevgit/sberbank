import { Dayjs } from 'dayjs';

export interface IProfile {
  name: string;
  surname: string;
  middleName: string;
  age: number;
  phone: number;
  registrationDate: string | Dayjs;
}

export interface ProfileSchema {
  error?: string;
  isLoading: boolean;
  profile: IProfile;
}
