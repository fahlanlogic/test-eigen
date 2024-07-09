const prisma = require("../libs/prisma");

// member baru
class MembersController {
  static async createNewMember(req, res) {
    const { code, name } = req.body;
    const member = await prisma.member.create({
      data: { code, name },
    });
    res.json(member);
  }
}

module.exports = MembersController;
