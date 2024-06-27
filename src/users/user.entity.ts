export class User {
  id: string;
  name: string;
  email: string;
  status: UserStatus;
}

export enum UserStatus {
  BLOCKED = 'BLOCKED',
  AVAILABLE = 'AVAILABLE',
}
