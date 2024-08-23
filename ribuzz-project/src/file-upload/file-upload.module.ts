import { Module } from '@nestjs/common';
import { FileUploudService } from './file-upload.service';
import { FileUploudController } from './file-upload.controller';
import { ClaudinaryConfig } from 'src/config/claudinary.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from '../Entidades/products.entity';
import { FileUploadRepository } from './file-upload.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Products])],
  controllers: [FileUploudController],
  providers: [FileUploudService,FileUploadRepository ,ClaudinaryConfig],
})
export class FileUploudModule {}
