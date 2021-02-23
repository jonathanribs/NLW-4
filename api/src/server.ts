import express, { response } from 'express';

const app = express();

// http://localhost:3333/users
app.get("/users", (request, response) => {
    //return response.send("Hello World - NLW04")
    return response.json({ message: "Hello World - NLW04" })
})

app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso" })
})

app.listen(3333, () => console.log("Server is running!"))