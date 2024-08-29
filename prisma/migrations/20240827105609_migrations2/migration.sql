/*
  Warnings:

  - You are about to drop the column `latitude` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `DrvingLicense` on the `driverprofil` table. All the data in the column will be lost.
  - You are about to drop the column `ImmatriculationNumber` on the `driverprofil` table. All the data in the column will be lost.
  - You are about to drop the column `immatriculation` on the `vehicles` table. All the data in the column will be lost.
  - Added the required column `DrivingLicense` to the `driverprofil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleId` to the `driverprofil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "vehicles_immatriculation_key";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "latitude",
DROP COLUMN "longitude";

-- AlterTable
ALTER TABLE "driverprofil" DROP COLUMN "DrvingLicense",
DROP COLUMN "ImmatriculationNumber",
ADD COLUMN     "DrivingLicense" TEXT NOT NULL,
ADD COLUMN     "vehicleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "immatriculation",
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_MaintenanceToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MaintenanceToUser_AB_unique" ON "_MaintenanceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MaintenanceToUser_B_index" ON "_MaintenanceToUser"("B");

-- AddForeignKey
ALTER TABLE "_MaintenanceToUser" ADD CONSTRAINT "_MaintenanceToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "maintenance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaintenanceToUser" ADD CONSTRAINT "_MaintenanceToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
