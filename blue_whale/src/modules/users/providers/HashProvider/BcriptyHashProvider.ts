import { compare, hash } from "bcryptjs";

import IHashProvider from "../models/IHashProvider";

class BcryptHashProvider implements IHashProvider {
  public async generatehash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export { BcryptHashProvider };
