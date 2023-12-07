import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/mongostore', {
    family: 4
})
mongoose.connection.on("connected", () => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!")
})
mongoose.connection.on("error", (err) => {
    console.error("Erro na conexão com o MongoDB:", err)
})

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:'+PORT)
});