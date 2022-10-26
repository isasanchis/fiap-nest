import { Injectable } from '@nestjs/common';
import { UpdateProductDTO } from './dto/updateProduct.dto';

@Injectable()
export class ProductsService {
    async create(): Promise<string> {
        return "Produto criado com sucesso!";
    }

    async findAll(): Promise<string> {
        return "Lista de todos os produtos.";
    }

    async findOne(id: number): Promise<string> {
        return `Produto: ${id} retornado.`;
    }

    async update(id: number, req: UpdateProductDTO): Promise<string> {
        return `Produto ${id} atualizado com sucesso!`
    }

    async delete(id: number): Promise<string> {
        return `Produto ${id} deletado com sucesso.`
    }
}
