import {
    Body,
    Controller,
    Get,
    Patch,
    UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';
import { EditUserDto } from './dto';

@UseGuards(JwtGuard) // Protect route with user's token
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {} // Inject user service

    // Get user profile -> GET /user/me
    @Get('me')
    getMe(@GetUser() user: User) {
        return user;
    }
    
    // Edit user profile -> PATCH /user/me
    @Patch('me')
    editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
        return this.userService.editUser(userId, dto);
    }
}
