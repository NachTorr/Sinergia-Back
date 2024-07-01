import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers(@Query() query: any) {
    console.log(query);

    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
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

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found';
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'Error route';
  }
}
