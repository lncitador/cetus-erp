import { config } from "dotenv";

import { appServer } from "@shared/infra/http/server";

config();

appServer(Number(process.env.SERVER_HOST));
