import { Response } from 'express'

import { ISpotifyProfile } from '../services/interfaces'

import { Company, PreRegister } from '../models'
class CompanyController {

	async processAuth(res: Response, profile: ISpotifyProfile) {
		const registered = await PreRegister.findOne({ username: profile.username })

		if(!registered) {
			console.log('[verifica cadastro] NÃO REGISTRADO')
			await PreRegister.create(profile)
			return res.redirect('/')
		}

		if(registered && !registered['processed'])
			return res.redirect('/')
		
		return res.redirect('/logged')		
	}
}

export default new CompanyController()