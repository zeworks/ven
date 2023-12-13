/*
  Warnings:

  - You are about to alter the column `status` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum("Users_status")`.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `status` ENUM('PENDING', 'INACTIVE', 'ACTIVE') NOT NULL DEFAULT 'PENDING';
