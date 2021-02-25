import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

//Usando mais de um arquivo de testes, foi necessário rodar o teste com "yarn test -i"

describe("Surveys", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Title Example",
            description: "Descritpion Example",
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("Should be able to get all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "Title Example2",
            description: "Descritpion Example2",
        });

        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2);
    });

});