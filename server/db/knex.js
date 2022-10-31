import knex from 'knex';
import config from '../knexfile';

// import dotenv from 'dotenv';
// dotenv.config();

export default knex(process.env.PORT ? config.production : config.development);