import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserStatus } from './user.entity';
import { v4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  private users: User[] = [
    {
      id: '1',
      name: 'Pepito',
      email: 'Pepi',
      status: UserStatus.AVAILABLE,
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User {
    const userFound: User = this.users.find((user) => user.id === id);

    if (!userFound) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return userFound;
  }

  create(name: string, email: string): User {
    const user = {
      id: v4(),
      name,
      email,
      status: UserStatus.AVAILABLE,
    };
    this.users.push(user);
    return user;
  }

  deleteById(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id: string, updatedFields: UpdateUserDto): User {
    const user = this.findById(id);
    const updatedUser = Object.assign(user, updatedFields);
    this.users = this.users.map((user) =>
      user.id === id ? updatedUser : user,
    );
    return updatedUser;
  }
}
