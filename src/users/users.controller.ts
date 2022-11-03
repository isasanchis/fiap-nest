import { Body, Controller, Get, Param, Post, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() req: CreateUserDTO) {
        return this.usersService.create(req);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number,
        @Body() req: UpdateUserDTO) {
            return this.usersService.update(id, req);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id);
    }
}
