import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getAllUsers(): User[] {
    return this.usersRepository.findAll();
  }

  getUserById(id: string): User {
    return this.usersRepository.findById(id);
  }

  createUser(name: string, email: string): User {
    return this.usersRepository.create(name, email);
  }

  deleteUser(id: string): void {
    this.usersRepository.deleteById(id);
  }

  updateUser(id: string, updatedFields: UpdateUserDto): User {
    return this.usersRepository.update(id, updatedFields);
  }
}
