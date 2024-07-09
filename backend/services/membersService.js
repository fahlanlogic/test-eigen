const MembersRepo = require("../repositories/membersRepo");

class MembersService {
  static async create(body) {
    try {
      const { code, name } = body;

      // cek body json saat request
      if (!code || !name) throw { code: 400 }; // salah input key
      if (code.trim().length == 0 || name.trim().length == 0) throw { code: 400 }; // isi value dengan spasi kosong

      const member = await MembersRepo.create({
        data: { code, name },
      });
      return member;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MembersService;
