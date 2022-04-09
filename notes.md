when we create the frontend app we have to get rid of the .github folder use cmd + shift+ .in finder

model ShoppingList {
id Int @id @default(autoincrement())
name String
description String
category String
price Int
createdAt DateTime @default(now())
updatedAt DateTime @default(now())
authour User? @relation(fields: [authorId], references: [id])
authorId Int?
}

Connection string for prism 2
DATABASE_URL="sqlserver://localhost:1433;database=hoppingCart;user=sa;password=M@l1k2F1v3;TrustServerCertificate=true;encrypt=true"

Authors have now to many books relationship to books -The [] in the end of the data type means that it can be multiple, this is how you tell Prisma that this is a one-to-many relation, because one creator has many videos.

//Author Schema
model Author {
id Int @default(autoincrement()) @id
email String @unique
firstName String?
lastName String?
books Book[]
}

//Books Schema
model Book {
id Int @default(autoincrement()) @id
title String @unique
author Author? @relation(fields: [authorId], references: [id])
genre String
outOfPrint Boolean
publisher String?
publishDate DateTime
authorId Int?

}
