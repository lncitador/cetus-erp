import express from "express";

const server = express();

server.use(express.json());

server.get("/", (request, response) => {
  response.json({ message: "ok" });
});

const appServer = (host: number): void => {
  server.listen(host, () => {
    console.log("Server running 🚀");
  });
};

export { appServer };
