-- SQLite
CREATE TABLE "main_item" (
"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    "seller_wallet_address" varchar(100) NOT NULL, 
    "id_item" integer NOT NULL, 
    "name" varchar(254) NOT NULL, 
    "imageLink" varchar(100), 
    "description" varchar(254) NOT NULL, 
    "price" double NOT NULL, 
    "quantity" integer NOT NULL, 
    "postingFee" double
);
