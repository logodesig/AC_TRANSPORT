/*
  Warnings:

  - The primary key for the `address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `address` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `driverprofil` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `driverprofil` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `incident` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `incident` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `maintenance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `maintenance` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `marchandise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `marchandise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `mission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `mission` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `note` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `note` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `role` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `vehicles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `vehicles` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "address" DROP CONSTRAINT "address_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "address_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "driverprofil" DROP CONSTRAINT "driverprofil_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "driverprofil_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "incident" DROP CONSTRAINT "incident_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "incident_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "maintenance" DROP CONSTRAINT "maintenance_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "maintenance_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "marchandise" DROP CONSTRAINT "marchandise_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "marchandise_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "mission" DROP CONSTRAINT "mission_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "mission_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "note" DROP CONSTRAINT "note_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "note_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "role" DROP CONSTRAINT "role_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "role_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id");
