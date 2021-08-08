export default interface IUser {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}
