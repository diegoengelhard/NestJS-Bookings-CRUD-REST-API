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

@UseGuards(JwtGuard) // Protect route with user's token
@Controller('user')
export class UserController {
    // Get user profile -> GET /user/me
    @Get('me')
    getMe(@GetUser() user: User) {
        return user;
    }
}
