import { v4 as uuidv4 } from "uuid";

import IUser from "@modules/users/models/IUser";

class FakeUser implements IUser {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
      this.updated_at = new Date();
    }
  }
}

export { FakeUser };
