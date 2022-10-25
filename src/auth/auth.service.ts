import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async authLogin(login: string, password: string) {
        console.log(login);
        console.log(password);
        return { login, password };
    }
}
