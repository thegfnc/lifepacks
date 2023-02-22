-- DropForeignKey
ALTER TABLE "PackItem" DROP CONSTRAINT "PackItem_packId_fkey";

-- AddForeignKey
ALTER TABLE "PackItem" ADD CONSTRAINT "PackItem_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
