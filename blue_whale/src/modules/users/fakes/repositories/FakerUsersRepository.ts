import IUser from "@modules/users/models/IUser";
import {
  IUsersDTO,
  IUsersRepository,
} from "@modules/users/repositories/IUsersRepository";

import { FakeUser } from "../entities/FakerUser";

class FakerUsersRepository implements IUsersRepository {
  private Users: IUser[] = [];

  public async create({
    first_name,
    last_name,
    email,
    password,
  }: IUsersDTO): Promise<IUser> {
    const user = new FakeUser();

    Object.assign(user, {
      first_name,
      last_name,
      email,
      password,
    });

    this.Users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<IUser> {
    const user = this.Users.find((user) => user.email === email);

    return user;
  }

  public async findById(id: string): Promise<IUser> {
    const user = this.Users.find((user) => user.id === id);

    return user;
  }

  public async save(user: IUser): Promise<IUser> {
    const findIndex = this.Users.findIndex((index) => index.id === user.id);

    this.Users[findIndex] = user;

    return user;
  }
}

export { FakerUsersRepository };
