/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `todolist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `todolist_id_userId_key` ON `todolist`(`id`, `userId`);
