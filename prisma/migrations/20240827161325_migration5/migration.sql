-- DropForeignKey
ALTER TABLE "driverprofil" DROP CONSTRAINT "driverprofil_UserId_fkey";

-- AlterTable
ALTER TABLE "driverprofil" ALTER COLUMN "UserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "driverprofil" ADD CONSTRAINT "driverprofil_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
