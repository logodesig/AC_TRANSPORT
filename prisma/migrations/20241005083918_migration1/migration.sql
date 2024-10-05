-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_userCreated_fkey";

-- AlterTable
ALTER TABLE "address" ALTER COLUMN "userCreated" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userCreated_fkey" FOREIGN KEY ("userCreated") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
