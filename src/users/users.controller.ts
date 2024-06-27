import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.userService.createUser(newUser.name, newUser.email);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.userService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updatedFields: UpdateUserDto) {
    return this.userService.updateUser(id, updatedFields);
  }
}
