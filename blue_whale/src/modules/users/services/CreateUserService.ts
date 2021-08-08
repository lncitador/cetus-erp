import IUser from "../models/IUser";
import { IUsersDTO, IUsersRepository } from "../repositories/IUsersRepository";

class CreateUserService {
  constructor(private UsersRepository: IUsersRepository) {}

  public async execute({
    first_name,
    last_name,
    email,
    password,
  }: IUsersDTO): Promise<IUser> {
    const customer = await this.UsersRepository.create({
      first_name,
      last_name,
      email,
      password,
    });

    return customer;
  }
}

export { CreateUserService };
