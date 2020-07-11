import { Request, Response } from 'express'
import axios from 'axios'
import qs from 'qs'


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

	const { access_token, expires_in, refresh_token} = data

	return res.send()
}
