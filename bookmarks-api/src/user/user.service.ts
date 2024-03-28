import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {} // Inject Prisma service

    async editUser(userId: number, dto: EditUserDto) {
        const user = await this.prisma.user.update({
            // Update user by user ID
            where: {
                id: userId,
            },
            // Update user data from DTO
            data: {
                ...dto,
            },
        });

        delete user.hash;
        
        return user;
    }
}
