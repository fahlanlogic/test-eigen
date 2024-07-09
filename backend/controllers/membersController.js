const MembersService = require("../services/membersService");

// member baru
class MembersController {
  static async createNewMember(req, res, next) {
    try {
      const member = await MembersService.create(req.body);
      res.json({ message: "Member created!", data: member });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MembersController;
