const Prisma = require("../../libs/prisma");


const members = [
  {
    code: "M001",
    name: "Angga",
  },
  {
    code: "M002",
    name: "Ferry",
  },
  {
    code: "M003",
    name: "Putri",
  }
];

async function seedMember() {
  for (const member of members) {
    await Prisma.member.create({
      data: member
    });
  }
}

module.exports = seedMember;