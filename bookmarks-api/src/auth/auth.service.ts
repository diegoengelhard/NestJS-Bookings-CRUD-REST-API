import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        // Inject the PrismaService
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) { }

    async signup(body: AuthDto) {
        try {
            // generate the password hash
            const hash = await argon.hash(body.password);

            // create a new user
            const user = await this.prisma.user.create({
                data: {
                    email: body.email,
                    hash,
                },
            });

            // return the user
            return this.signToken(user.id, user.email);
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async signin(body: AuthDto) {
        try {
            // find the user by email
            const user = await this.prisma.user.findUnique({
                where: {
                    email: body.email,
                },
            });

            // if user does not exist throw exception
            if (!user) throw new ForbiddenException('Credentials incorrect');

            // compare password
            const pwMatches = await argon.verify(
                user.hash,
                body.password,
            );

            // if password incorrect throw exception
            if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

            // return the user
            return this.signToken(user.id, user.email);
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    async signToken(userId: number, email: string): Promise<{ access_token: string }> {
        const payload = {
          sub: userId,
          email,
        };

        const secret = this.config.get('JWT_SECRET');
    
        const token = await this.jwt.signAsync(
          payload,
          {
            expiresIn: '15m',
            secret: secret,
          },
        );
    
        return {
          access_token: token,
        };
    }
}