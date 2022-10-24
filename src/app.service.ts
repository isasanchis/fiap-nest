import { Injectable } from '@nestjs/common'; // pode injetar em outras classes

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
