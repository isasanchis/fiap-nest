import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/createProduct.dto';
import { ParseUUIDPipe } from '@nestjs/common/pipes';
import { UpdateProductDTO } from './dto/updateProduct.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() req: CreateProductDTO) {
        return this.productsService.create();
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: number, @Body() req: UpdateProductDTO) {
        return this.productsService.update(id, req);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }

}
