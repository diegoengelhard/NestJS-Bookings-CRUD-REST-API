import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    // instance of the AuthService class
    constructor(private authService: AuthService) {}

    // Sign-up endpoint -> POST /auth/sign-up
    @Post("sign-up")
    signup() {
        return this.authService.signup()
    }

    // Sign-in endpoint -> POST /auth/sign-in
    @Post("sign-in")
    signin() {
        return this.authService.signin()
    }
}