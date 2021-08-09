import { FakeHashProvider } from "../fakes/providers/FakeHashProvider";
import { FakerUsersRepository } from "../fakes/repositories/FakerUsersRepository";
import { IUsersDTO } from "../repositories/IUsersRepository";
import { CreateUserService } from "./CreateUserService";

let fakerUsersRepository: FakerUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;

describe("Create User", () => {
  beforeEach(() => {
    fakerUsersRepository = new FakerUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUserService = new CreateUserService(
      fakerUsersRepository,
      fakeHashProvider
    );
  });

  it("should be able create user", async () => {
    const data: IUsersDTO = {
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@mail.com",
      password: "123456",
    };

    const user = await createUserService.execute(data);

    expect(user.email).toBe("johndoe@mail.com");
  });
});
