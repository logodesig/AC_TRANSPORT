/*
  Warnings:

  - The values [SUPERADMIN] on the enum `UserType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserType_new" AS ENUM ('ADMIN', 'CHAUFFEUR');
ALTER TABLE "user" ALTER COLUMN "type" TYPE "UserType_new" USING ("type"::text::"UserType_new");
ALTER TABLE "driverprofil" ALTER COLUMN "type" TYPE "UserType_new" USING ("type"::text::"UserType_new");
ALTER TYPE "UserType" RENAME TO "UserType_old";
ALTER TYPE "UserType_new" RENAME TO "UserType";
DROP TYPE "UserType_old";
COMMIT;

-- AlterTable
ALTER TABLE "driverprofil" ADD COLUMN     "type" "UserType" DEFAULT 'CHAUFFEUR';

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "type" SET DEFAULT 'ADMIN';
