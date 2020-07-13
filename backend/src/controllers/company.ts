import { Request, Response } from 'express'

import { ISpotifyProfile } from '../services/interfaces'

import { Company, PreRegister } from '../models'
class CompanyController {

	async processAuth(res: Response, profile: ISpotifyProfile) {
		const registered = await PreRegister.findOne({ username: profile.username })

		if(!registered) {
			await PreRegister.create(profile)
			return res.send('Não registrado')
		}

		if(registered && !registered['processed'])
			return res.json({error: 'Não processado', profile})
		
		return res.redirect('/logged')		
	}

	async create(req: Request, res: Response) {
		return res.send(req.body)
	}
}

export default new CompanyController()