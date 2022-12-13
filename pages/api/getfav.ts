import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const allfav = await prisma.fav.findUnique({
        where: {
          email: req.body.userMail,
        },
      });

      res.send({ allfav });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
}
