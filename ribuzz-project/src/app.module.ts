/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm'; // Importa tu configuración de TypeORM
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [  TypeOrmModule.forRootAsync({
    useFactory: () => typeOrmConfig(),
  }),UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
