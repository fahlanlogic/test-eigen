const Prisma = require("../../libs/prisma");
const seedMember = require("../seeds/seedMember");
const seedBook = require("../seeds/seedBook");

async function seedAll() {
  await seedMember();
  await seedBook();
}

seedAll()
  .then(() => console.log("Seeding done!"))
  .catch(e => console.error(`Seeding fail: ${e}`))
  .finally(async () => {
    await Prisma.$disconnect();
  });
