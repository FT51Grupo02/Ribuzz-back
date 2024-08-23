import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '../Entidades/products.entity';
import { FileUploadRepository } from './file-upload.repository';
import { Repository } from "typeorm";
@Injectable()
export class FileUploudService {
   constructor(private readonly filesRepository:FileUploadRepository,
    @InjectRepository(Products)
    private readonly productRepository:Repository<Products>
    ){}
    async uploadImages(file:Express.Multer.File, productId:string){

        const product = await this.productRepository.findOneBy({id:productId})
        if(!product){
            throw new NotFoundException("product no encontrado");  
        }
        const uploadedImage = await this.filesRepository.uploadImage(file)
        console.log(uploadedImage);

        await this.productRepository.update(product.id,{
            imagen: uploadedImage.secure_url,
        });

        return await this.productRepository.findOneBy({ id:productId })
   }
}
