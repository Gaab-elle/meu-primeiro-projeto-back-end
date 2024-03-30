const express = require("express")
const app = express()
const porta = 4444

function mostraOla(req, res) {
    res.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.get('/ola', mostraOla)
app.listen(porta, mostraPorta)
