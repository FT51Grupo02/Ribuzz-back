/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

dotenvConfig({ path: '.env' });

const config = {
    type: process.env.TYPE_DB as any,
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB, 10), // Asegúrate de que esta variable sea la correcta
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '/../migrations/*{.ts,.js}')],
    autoLoadEntities: true,
    synchronize: true,
    // dropSchema: true,   // activarlo solo para borrar la base de datos
};

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions);
