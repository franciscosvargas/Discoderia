import { Request, Response } from 'express'
import axios from 'axios'
import qs from 'qs'

import Company from '../controllers/company'

import { ISpotifyProfile } from '../services/interfaces'

export function AuthorizeCompany(req: Request, res: Response) {

	const scopes = 'user-read-private user-read-email'

	res.redirect('https://accounts.spotify.com/authorize' +
	'?response_type=code' +
	'&client_id=' + process.env.CLIENT_ID +
	'&scope=' + encodeURIComponent(scopes) +
	'&redirect_uri=' + encodeURIComponent(process.env.REDIRECT_URI ))
}

export async function AuthCallback(req: Request, res: Response) {
	const { code } = req.query

	const body = qs.stringify({
		grant_type: 'authorization_code',
		code, 
		redirect_uri: process.env.REDIRECT_URI,
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET
	})

	const { data } = await axios.post('https://accounts.spotify.com/api/token', body)

	const { access_token, refresh_token} = data

	const config = {
		headers: {
			'Authorization': 'Bearer ' + access_token
		}
	}

	const response = await axios.get('https://api.spotify.com/v1/me', config)

	const profile: ISpotifyProfile = {
		username: response.data.id,
		email: response.data.email,
		token: access_token,
		refreshToken: refresh_token
	}

	Company.processAuth(res, profile)
}
