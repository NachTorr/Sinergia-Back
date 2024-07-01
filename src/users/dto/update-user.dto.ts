import { IsString, IsOptional, MinLength, IsIn } from 'class-validator';
import { UserStatus } from '../user.entity';

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
