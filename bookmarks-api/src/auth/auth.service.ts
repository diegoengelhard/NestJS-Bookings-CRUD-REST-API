import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    signup() {
        return "This is the sign-up endpoint"
    }

    signin() {
        return "This is the sign-in endpoint"
    }
}