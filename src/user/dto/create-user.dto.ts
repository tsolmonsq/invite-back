import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The email of the user' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'The lastname of the user' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ description: 'The firstname of the user' })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ description: 'The password of the user', minLength: 6, maxLength: 20 })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @ApiProperty({ description: 'Password confirmation', minLength: 6, maxLength: 20 })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  passwordConfirmation: string;
}
