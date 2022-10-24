import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'; // injeção de dependência

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getHello(): string {
    // está apenas redirecionando o usuário para o serviço correto
    return this.appService.getHello();
  }

  @Get('/login')
  getLogin(): string {
    return this.appService.getLogin();
  }

  @Get('/register')
  getRegister(): string {
    return this.appService.getRegister();
  }
}
