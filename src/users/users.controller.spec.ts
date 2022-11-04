import { Test, TestingModule } from '@nestjs/testing';
import { EmailModule } from 'src/email/email.module';
import { EmailService } from 'src/email/email.service';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EmailModule],
      controllers: [UsersController],
      providers: [UsersService, EmailService, PrismaService]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
