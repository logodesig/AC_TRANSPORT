/*
  Warnings:

  - You are about to drop the column `latitude` on the `vehicles` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `vehicles` table. All the data in the column will be lost.
  - Made the column `firstYearTakeoff` on table `vehicles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "driverprofil" ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "password" TEXT;

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "latitude",
DROP COLUMN "longitude",
ALTER COLUMN "firstYearTakeoff" SET NOT NULL;
