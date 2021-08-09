import IUser from "../models/IUser";

interface IUsersDTO {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  create(data: IUsersDTO): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
}

export { IUsersRepository, IUsersDTO };
