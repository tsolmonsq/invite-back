import { IsString, IsOptional, IsEmail, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ description: 'The email of the user', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'The lastname of the user', required: false })
  @IsOptional()
  @IsString()
  lastname?: string;

  @ApiProperty({ description: 'The firstname of the user', required: false })
  @IsOptional()
  @IsString()
  firstname?: string;

  @ApiProperty({ description: 'The password of the user', minLength: 6, maxLength: 20, required: false })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password?: string;

  @ApiProperty({ description: 'Password confirmation', minLength: 6, maxLength: 20, required: false })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  passwordConfirmation?: string;
}
