import { Injectable } from '@nestjs/common'; // pode injetar em outras classes

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem-vindo à API Avanade!';
  }
}
