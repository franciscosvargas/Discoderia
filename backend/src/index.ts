import express from 'express'
import 'dotenv/config'

const PORT = process.env.SERVER_PORT 
const app = express()

app.listen(PORT, () => console.log('\nServidor ligado na porta', PORT))

