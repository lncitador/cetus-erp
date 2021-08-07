import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { AppError } from "@shared/errors/AppError";

const server = express();

server.use(express.json());

server.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

server.get("/", (request, response) => {
  response.json({ message: "ok" });
});

const appServer = (host: number): void => {
  server.listen(host, () => {
    console.log("Server running 🚀");
  });
};

export { appServer };
