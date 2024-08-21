/* eslint-disable prettier/prettier */
import {registerAs} from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' }) ;

const config = {
    type: process.env.TYPE_DB as any,
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT, 10),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    entities: [__dirname + 'dist/../Entidades/*.entity.{ts,js}'],
    migrations: [__dirname + 'dist/../Migraciones/*.{ts,.js}'],
    autoLoadEntities:true,
    synchronize: true,
    logging: true,
}

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions);