import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService) {} // tem que estar mencionado no module

    async create(data): Promise<users> { // retorna promessa pois pode não dar certo
        const { name, email, password } = data;
        const user = await this.prisma.users.create({
            data: {
                name,
                email,
                password,
            },
        });
        if(!user) {
            throw new HttpException({ // error interrompe código, exception apenas trata o erro
                status: HttpStatus.FORBIDDEN,
                message: 'Erro ao criar usuário!',
            }, HttpStatus.FORBIDDEN);
        }
        return user;
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
