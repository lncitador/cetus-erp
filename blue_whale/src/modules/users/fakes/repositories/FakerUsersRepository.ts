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
}

export { FakerUsersRepository };
