import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserEntity } from './models/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule { }
