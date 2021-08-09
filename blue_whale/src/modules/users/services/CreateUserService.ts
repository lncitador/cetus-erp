import IUser from "../models/IUser";
import IHashProvider from "../providers/models/IHashProvider";
import { IUsersDTO, IUsersRepository } from "../repositories/IUsersRepository";

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository,

    private hashProvider: IHashProvider
  ) {}

  public async execute({
    first_name,
    last_name,
    email,
    password,
  }: IUsersDTO): Promise<IUser> {
    const hashedPassword = await this.hashProvider.generatehash(password);

    const customer = await this.usersRepository.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    return customer;
  }
}

export { CreateUserService };
