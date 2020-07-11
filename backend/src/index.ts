import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import { Auth } from './routes'

const PORT = process.env.SERVER_PORT 
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

//Connect Database
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.vtgdq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, 
	{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const app = express()

//Spotify auth
app.use('/auth', Auth)

app.listen(PORT, () => console.log('\nServidor ligado na porta', PORT))

