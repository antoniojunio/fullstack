import request from "supertest";
import app from "../src/app";

describe("Testando rotas de autenticação", () => {
  it("POST /accounts/login - 200 OK", async () => {
    //mocking
    const newAccount = {
      id: 1,
      name: "Antonio",
      email: "juniordsj@gmail.com",
      password: "123456",
    };

    await request(app).post("/accounts/").send(newAccount);

    //testing
    const payload = {
      email: "juniordsj@gmail.com",
      password: "123456",
    };

    const resultado = await request(app).post("/accounts/login").send(payload);

    expect(resultado.status).toEqual(200);
    expect(resultado.body.auth).toBeTruthy();
    expect(resultado.body.token).toBeTruthy();
  });

  it("POST /accounts/login - 422 Unprocessable Entity", async () => {
    const payload = {
      email: "juniordsj@gmail.com",
      password: "abc",
    };

    const resultado = await request(app).post("/accounts/login").send(payload);

    expect(resultado.status).toEqual(422);
  });

  it("POST /accounts/login - 401 Unauthorized", async () => {
    const payload = {
      email: "juniordsj@gmail.com",
      password: "abc123",
    };

    const resultado = await request(app).post("/accounts/login").send(payload);

    expect(resultado.status).toEqual(401);
  });

  it("POST /accounts/logout - 200 OK", async () => {
    const resultado = await request(app).post("/accounts/logout");

    expect(resultado.status).toEqual(200);
  });
});