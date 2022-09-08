import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'


export const Connections = new DataSource({
	type: 'postgres',
	host: process.env.DB_PORT,
	port: Number(process.env.POSTGRES_DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [`${__dirname}/infra/database/typeorm/entities/*.{ts,js}`],
	migrations: [`${__dirname}/nfra/database/typeorm/migrations/*.{ts,js}`],
})