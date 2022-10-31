import dotenv from 'dotenv';
import knex from 'knex';
dotenv.config();

const knex = {
    development: {
        client: 'pg',
        connection: process.env.DB_URL_LOCAL,
        searchPath: 'public',
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DB_URL,
        searchPath: 'public',
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    }
}

export default knex;