import { UserStatus } from '../user.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  name: string;
  @IsString()
  @IsOptional()
  @MinLength(3)
  email: string;
  @IsString()
  @IsOptional()
  @MinLength(3)
  @IsIn([UserStatus.AVAILABLE, UserStatus.BLOCKED])
  status: UserStatus;
}
