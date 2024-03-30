import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  // Bookmark DTO body validations
  export class EditBookmarkDto {
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsOptional()
    link?: string;
  }
  