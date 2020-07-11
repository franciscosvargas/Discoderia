import { Document } from 'mongoose'

export interface ICompany extends Document {
	address: string
	cnpj: string
	name: string
	phone: string
	open: boolean
	location: ILocation
	email: ISpotifyInfo['email']
	username: ISpotifyInfo['username']
	token: ISpotifyInfo['token']
	refreshToken: ISpotifyInfo['refreshToken']
}

export interface ILocation {
	latitude: number
	longitude: number
}

export interface ISpotifyInfo extends Document {
	username: string
	token: string,
	refreshToken: string
	email: string
	processed?: boolean | false
}

export interface ISpotifyProfile {
	username: ISpotifyInfo['username']
	token: ISpotifyInfo['token']
	refreshToken: ISpotifyInfo['refreshToken']
	email: ISpotifyInfo['email']
	processed?: ISpotifyInfo['processed']
}