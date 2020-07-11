import mongoose, { Schema, Document } from 'mongoose'
import { ICompany } from '../services/interfaces'


const required = true

const CompanySchema: Schema = new Schema({
	address: { type: String, required },
	cnpj: { type: String, required },
	name: { type: String, required },
	open: { type: Boolean, required},
	location: { type: Object, required },
	email: { type: String, required, unique: true},
	username: { type: String, required, unique: true},
	token: { type: String, required, unique: true},
	refreshToken: { type: String, required, unique: true},
	phone: { type: String },
})

export default mongoose.model<ICompany>('Company', CompanySchema)