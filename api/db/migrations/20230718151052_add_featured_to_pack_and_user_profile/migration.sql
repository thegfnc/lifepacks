-- AlterTable
ALTER TABLE "Pack" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;
