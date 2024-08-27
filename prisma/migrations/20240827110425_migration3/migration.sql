-- AlterTable
ALTER TABLE "user" ALTER COLUMN "avatarUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "vehicles" ALTER COLUMN "firstYearTakeoff" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;
