import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Eko Khannedy",
        email: "eko@example.com",
        phone: "08999999999"
    }
});

console.info(contact);
