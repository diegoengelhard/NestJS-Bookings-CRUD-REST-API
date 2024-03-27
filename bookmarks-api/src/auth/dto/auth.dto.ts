// Define DTO for auth module
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
} from 'class-validator';

// Validations for email and password
export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'password must contain at least 8 chars, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special char',
    })
    password: string;
}
