import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../src/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let dbResult;
  try {
    dbResult = await prisma.todo.deleteMany();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Unexpected error` });
    return;
  }

  console.log(`successfully deleted ${dbResult.count} todos`);

  res.status(200).json(dbResult);
}
