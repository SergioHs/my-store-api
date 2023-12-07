import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import productRoutes from '../src/routes/product.routes'

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

app.use('/products', productRoutes)

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:'+PORT)
});