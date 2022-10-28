import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService) {}
    
    async create(): Promise<string> { // retorna promessa pois pode não dar certo
        return 'Usuário criado com sucesso!';
    }

    async findAll(): Promise<string> {
        return 'Lista de usuários!';
    }

    async findOne(id: number): Promise<string> {
        return `Usuário ${id}!`;
    }

    async update(id: number, req: UpdateUserDTO): Promise<string> {
        return `Usuário ${id} atualizado com sucesso!`;
    }

    async delete(id: number): Promise<string> {
        return `Usuário ${id} deletado com sucesso!`;
    }
}
