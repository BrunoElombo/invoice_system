/*
  Warnings:

  - Added the required column `gender` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `invoice` MODIFY `displayName` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `invoice_item` MODIFY `displayName` VARCHAR(191) NULL,
    MODIFY `code` VARCHAR(191) NULL,
    MODIFY `price` DOUBLE NOT NULL DEFAULT 0.0,
    MODIFY `discount` DOUBLE NOT NULL DEFAULT 0.0,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `permission` MODIFY `displayName` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `quote` MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `role` MODIFY `displayName` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    MODIFY `password` VARCHAR(191) NULL;
