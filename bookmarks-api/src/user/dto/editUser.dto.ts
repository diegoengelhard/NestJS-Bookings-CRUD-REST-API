import {
    IsEmail,
    IsOptional,
    IsString,
} from 'class-validator';

// DTO for editing a user
export class EditUserDto {
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;
}
