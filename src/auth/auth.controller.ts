import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {} // injeção de dependência

    @Post('login')
    async authLogin(@Body() req) {
        const {login, password} = req;
        console.log("Login: ", login);
        console.log("Password: ", password);
        if(!login) {
            throw new HttpException('Login não informado', HttpStatus.BAD_REQUEST);
        }
        return this.authService.authLogin(login, password);
    }
}
