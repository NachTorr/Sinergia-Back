import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './user.entity';
import { v4 } from 'uuid';
import { UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Pepito',
      email: 'Pepi',
      status: UserStatus.AVAILABLE,
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(name: string, email: string) {
    const user = {
      id: v4(),
      name,
      email,
      status: UserStatus.AVAILABLE,
    };
    this.users.push(user);

    return user;
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  updateUser(id: string, updatedFields: UpdateUserDto): User {
    const user = this.getUserById(id);
    const updatedUser = Object.assign(user, updatedFields);
    this.users = this.users.map((user) =>
      user.id === id ? updatedUser : user,
    );
    return updatedUser;
  }
}
