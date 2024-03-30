import {
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

// Bookmark DTO body validations
export class CreateBookmarkDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    link: string;
}
