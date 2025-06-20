export interface User {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  employeeCode: string;
  _id?: string;
  role?: string;
}
export interface Task {
  timeSlot: string;
  description: string;
  date: string;
  userId?: {
    username?: string;
    _id?: string;
    email?: string;
  };
  _id?: string;
}
