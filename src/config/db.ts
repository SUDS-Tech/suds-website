/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */
import {DataSource} from 'typeorm'
import { env } from "./env";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    synchronize: env.NODE_ENV === 'development',
    logging: env.NODE_ENV === 'development',
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
    ssl: env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    extra:{
        max:20,
        min: 5,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000
    },
});

export const initializeDB = async () =>{
    try{
        await AppDataSource.initialize();
        console.log('Database connected');
        return AppDataSource;
    }catch(err){
        console.error('Database connection failed:', err);
        throw err;
    }
}