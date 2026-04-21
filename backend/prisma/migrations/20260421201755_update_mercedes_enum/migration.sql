/*
  Warnings:

  - The values [Mercedes-Benz] on the enum `Make` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Make_new" AS ENUM ('Toyota', 'Honda', 'BYD', 'Nissan', 'Suzuki', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Tata', 'Kia', 'Tesla', 'Volkswagen');
ALTER TABLE "Listing" ALTER COLUMN "make" TYPE "Make_new" USING ("make"::text::"Make_new");
ALTER TYPE "Make" RENAME TO "Make_old";
ALTER TYPE "Make_new" RENAME TO "Make";
DROP TYPE "public"."Make_old";
COMMIT;
