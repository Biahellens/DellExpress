-- CreateTable
CREATE TABLE "orders" (
"id" SERIAL,
    "customerName" TEXT NOT NULL,
    "addressDelivery" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");
