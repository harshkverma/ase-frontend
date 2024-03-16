export interface IPatient {
  _id: string;
  name: string;
  age: number;
  profile_pic?: string;
  user_name: string;
  contact_number: string;
  email: string;
  address: string;
  role: EUserRole;
  sex: string;
}

export enum EUserRole {
  patient = "patient",
  doctor = "doctor",
  nurse = "nurse",
  admin = "admin"
}