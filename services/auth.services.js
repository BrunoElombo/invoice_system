import bcrypt from 'bcrypt';
import { prisma } from '../config/config.js';

export const authenticateUser = async (username, password) => {

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    throw new Error('User not found');
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid password');
  }
  return user;

};

export const resetUserPassword = async (email, newPassword) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword }
  });
};