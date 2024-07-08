- Members can borrow books with conditions
  - Members may not borrow more than 2 books
  - Borrowed books are not borrowed by other members
  - Member is currently not being penalized
request : `POST: /api/members`

Step by step to run project
1. Install dependencies `npm install`
2. Configuration your .env match your database based .env.example
3. Run migrate database via Prisma CLI `npx prisma migrate dev`
