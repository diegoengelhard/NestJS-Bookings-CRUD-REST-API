import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from './strategy';

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
    ],
    imports: [
        PrismaModule,
        JwtModule.register({}),
    ]
})
export class AuthModule {}
