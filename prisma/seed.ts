import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("password123", 12);
  const user = await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      email: "admin@admin.com",
      name: "Admin",
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: "admin1@admin.com" },
    update: {},
    create: {
      email: "admin1@admin.com",
      name: "Admin1",
    },
  });
  const user3 = await prisma.user.upsert({
    where: { email: "admin2@admin.com" },
    update: {},
    create: {
      email: "admin2@admin.com",
      name: "Admin2",
    },
  });
  console.log({ user });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });