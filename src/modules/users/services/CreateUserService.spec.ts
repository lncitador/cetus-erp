import { FakerUsersRepository } from "../fakes/repositories/FakerUsersRepository";
import { CreateUserService } from "./CreateUserService";

let fakerUsersRepository: FakerUsersRepository;
let createUserService: CreateUserService;

describe("Create User", () => {
  beforeEach(() => {
    fakerUsersRepository = new FakerUsersRepository();
    createUserService = new CreateUserService(fakerUsersRepository);
  });
});
