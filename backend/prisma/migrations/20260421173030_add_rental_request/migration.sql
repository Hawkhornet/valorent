-- CreateEnum
CREATE TYPE "Make" AS ENUM ('Toyota', 'Honda', 'BYD', 'Nissan', 'Suzuki', 'Ford', 'BMW', 'Mercedes-Benz', 'Audi', 'Tata', 'Kia', 'Tesla', 'Volkswagen');

-- CreateEnum
CREATE TYPE "District" AS ENUM ('Colombo', 'Gampaha', 'Kandy', 'Galle', 'Jaffna', 'Trincomalee', 'Anuradhapura', 'Kurunegala');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('Sedan', 'SUV', 'Truck', 'Coupe', 'Van', 'Hatchback');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('Petrol', 'Diesel', 'Electric', 'Hybrid');

-- CreateEnum
CREATE TYPE "RentalRequestStatus" AS ENUM ('pending', 'accepted', 'denied');

-- CreateEnum
CREATE TYPE "TransmissionType" AS ENUM ('Automatic', 'Manual');

-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('active', 'inactive', 'rented', 'deleted');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('active', 'ending_soon', 'completed');

-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('text', 'rental_request', 'rental_accepted', 'rental_denied');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "make" "Make" NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "trim" TEXT,
    "body_type" "BodyType" NOT NULL,
    "exterior_color" TEXT NOT NULL,
    "interior_color" TEXT,
    "horsepower" INTEGER NOT NULL,
    "doors" INTEGER,
    "fuel_type" "FuelType" NOT NULL,
    "cylinders" INTEGER,
    "engine_capacity_cc" INTEGER,
    "battery_capacity_kwh" DOUBLE PRECISION,
    "range_km" INTEGER,
    "seating_capacity" INTEGER NOT NULL,
    "transmission_type" "TransmissionType" NOT NULL,
    "mileage_km" INTEGER NOT NULL,
    "price_per_day" DOUBLE PRECISION NOT NULL,
    "deposit" DOUBLE PRECISION,
    "min_rental_days" INTEGER NOT NULL DEFAULT 1,
    "max_rental_days" INTEGER NOT NULL DEFAULT 30,
    "description" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "city" TEXT NOT NULL,
    "district" "District" NOT NULL,
    "status" "ListingStatus" NOT NULL DEFAULT 'active',
    "images" TEXT[],
    "platformAssured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "price_per_day" DOUBLE PRECISION NOT NULL,
    "rental_start" TIMESTAMP(3) NOT NULL,
    "rental_end" TIMESTAMP(3) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'active',
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "chatUserId" TEXT NOT NULL,
    "ownerUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "lastMessage" TEXT NOT NULL DEFAULT '',
    "isLastMessageRead" BOOLEAN NOT NULL DEFAULT true,
    "lastMessageSenderId" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "type" "MessageType" NOT NULL DEFAULT 'text',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalRequest" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "renterId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "status" "RentalRequestStatus" NOT NULL DEFAULT 'pending',
    "rentalStart" TIMESTAMP(3) NOT NULL,
    "rentalEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RentalRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_chatUserId_fkey" FOREIGN KEY ("chatUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalRequest" ADD CONSTRAINT "RentalRequest_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentalRequest" ADD CONSTRAINT "RentalRequest_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
