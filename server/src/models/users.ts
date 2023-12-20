import { Prisma } from '@prisma/client'

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export type UpdateUserInput = Prisma.UsersUpdateInput
