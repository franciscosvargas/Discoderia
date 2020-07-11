import express from 'express'
import { AuthorizeCompany, AuthCallback} from '../services/auth'

const router = express.Router()

router.get('/spotify', AuthorizeCompany)
router.get('/callback', AuthCallback)
router.post('/register', AuthCallback)

export default router