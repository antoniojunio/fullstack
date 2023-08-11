import request from "supertest";
import { Response } from "express";
import app from "../src/app";

describe("Testando rotas do accounts", () => {
  it("POST /accounts/ - Deve retornar statusCode 201", async () => {
    const payload = {
      id: 1,
      name: "Antonio",
      email: "junior@gmail.com",
      password: "123456",
      status: 1,
    };

    const resultado = await request(app).post("/accounts/").send(payload);

    expect(resultado.status).toEqual(201);
  });
});
