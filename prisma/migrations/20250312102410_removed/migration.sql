/*
  Warnings:

  - You are about to drop the column `isActive` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `invoice_item` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `permission` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `quote` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `role` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `invoice` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `invoice_item` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `permission` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `quote` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `isActive`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `isActive`;
