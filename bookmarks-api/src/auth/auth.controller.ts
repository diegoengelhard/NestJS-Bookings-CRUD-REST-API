import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
    // instance of the AuthService class
    constructor(private authService: AuthService) {}

    // Sign-up endpoint -> POST /auth/sign-up
    @Post("sign-up")
    signup(@Body() body: AuthDto){ // @Body() decorator to extract the request body
        return this.authService.signup(body)
    }

    // Sign-in endpoint -> POST /auth/sign-in
    @Post("sign-in")
    signin(@Body() body: AuthDto){ // @Body() decorator to extract the request body
        return this.authService.signin(body)
    }
}