export interface IDoctorHistory {
  _id: string;
  name: string;
  user_name: string;
  hospital: string;
  treatments: Array<string>;
  registration_date: string;
  start_date: string;
  end_date: string;
  specialization: Array<string>;
  study_history: Array<string>;
  contact_number?: string;
  assistant_id?: string | null;
  age: number;
  sex: string;
  year_of_practice: number;
  assosiated_with: Array<IDoctorAssositedWork>;
  availability_hours: Array<string>;
  profile_pic?: string;
  email: string;
  address: string;
  role: string;
  // patient age at which the treatment was done
}

export interface IDoctorAssositedWork {
  type: string;
  hospital: string;
}

// export interface IDoctorAvailabilityHours {
//   start_time: string;
//   end_time: string;
// }
