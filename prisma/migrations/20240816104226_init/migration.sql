/*
  Warnings:

  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Token";

-- CreateTable
CREATE TABLE "Demo" (
    "id" SERIAL NOT NULL,
    "chainId" INTEGER NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "decimals" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Demo_pkey" PRIMARY KEY ("id")
);
