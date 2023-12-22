-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "customerName" TEXT NOT NULL,
    "addressDelivery" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
