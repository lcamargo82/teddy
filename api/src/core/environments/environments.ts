import { configDotenv } from 'dotenv'

configDotenv();
export const APP_PORT = process.env.APP_PORT || 3333
export const DB_HOST = process.env.DB_HOST || 5432
export const DB_NAME = process.env.DB_NAME || ''
export const DB_USERNAME = process.env.DB_USERNAME || ''
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_PORT = process.env.DB_PORT || 5432