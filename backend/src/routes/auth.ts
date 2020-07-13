import express from 'express'
import { AuthorizeCompany, AuthCallback} from '../services/auth'

import Company from '../controllers/company'

const router = express.Router()

router.get('/spotify', AuthorizeCompany)
router.get('/callback', AuthCallback)
router.post('/register', Company.create)

export default router