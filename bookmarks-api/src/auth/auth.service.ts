import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(
        // Inject the PrismaService
        private prisma: PrismaService
    ) {}
    signup() {
        return "This is the sign-up endpoint"
    }

    signin() {
        return "This is the sign-in endpoint"
    }
}