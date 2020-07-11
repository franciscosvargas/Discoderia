import express from 'express'
import 'dotenv/config'

const PORT = process.env.SERVER_PORT 
const app = express()

import { AuthorizeCompany, AuthCallback} from './services/auth'

//Spotify auth
app.get('/authorize', AuthorizeCompany)
app.get('/callback', AuthCallback)

app.listen(PORT, () => console.log('\nServidor ligado na porta', PORT))

