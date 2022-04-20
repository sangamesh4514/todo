import request from "supertest";
import app from "./app";

describe("POST /todo", () => {
  describe("given a todo name", () => {
    test("should respond with a json object containing id of todo", async () => {
      const randomString = (Math.random() + 1).toString(36).substring(7);
      const response = await request(app)
        .post("/")
        .send({ name: randomString });
      expect(response.body.id).toBeDefined();
    });

    test("should respond with a status code of 200", async () => {
      const randomString = (Math.random() + 1).toString(36).substring(7);
      const response = await request(app)
        .post("/")
        .send({ name: randomString });
      expect(response.statusCode).toBe(200);
    });

    test("should specify json in the content type header", async () => {
      const randomString = (Math.random() + 1).toString(36).substring(7);
      const response = await request(app)
        .post("/")
        .send({ name: randomString });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("when the todo name is missing!", () => {
    test("should respond with a status code of 400", async () => {
      const response = await request(app).post("/").send({ name: "" });
      expect(response.statusCode).toBe(400);
    });
  });
});
