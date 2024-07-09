const prisma = require("../libs/prisma");

class MembersRepo {
  static async create(body) {
    try {
      console.log(body);
      const member = await prisma.member.create(body);
      return member;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MembersRepo;
