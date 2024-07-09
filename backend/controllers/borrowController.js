const prisma = require("../libs/prisma");

// member baru
class BorrowController {
  static async createNewBorrow(req, res) {
    // menerima body memberId dan bookId
    const { memberId, bookId } = req.body;
    const member = await prisma.member.findUnique({
      where: { id: memberId },
      include: { borrows: true },
    });

    // pengecekan buku yang dipinjam oleh member
    if (member.borrows.length >= 2) {
      return res
        .status(400)
        .json({ message: "Member cannot borrow more than 2 books" });
    }

    // pengecekan masa/durasi penalty member
    if (
      member.penalty_end_date &&
      new Date() < new Date(member.penalty_end_date)
    ) {
      return res
        .status(400)
        .json({ message: "Member is currently being penalized" });
    }

    // meminjam buku
    const borrow = await prisma.borrow.create({
      // menerima id member, id buku, tanggal pinjam saat ini, status hukuman
      data: {
        member_id: memberId,
        book_id: bookId,
        borrow_date: new Date(),
        isPenalize: false,
      },
    });
    res.status(200).json({ message: "Succesfully borrow book!", data: borrow });
  }
}

module.exports = BorrowController;
