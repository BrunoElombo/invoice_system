import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const prisma = new PrismaClient();
export const SECRET_KEY = process.env.SECRET_KEY