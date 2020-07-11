import mongoose, { Schema, Document } from 'mongoose'
import { ISpotifyInfo } from '../services/interfaces';

const required = true

const spotifyRegister: Schema = new Schema({
	username: { type: String, required },
	token: { type: String, required },
	refreshToken: { type: String, required },
	email: { type: String, required },
	processed: { type: Boolean, required, default: false },
})

export default mongoose.model<ISpotifyInfo>('spotify', spotifyRegister)