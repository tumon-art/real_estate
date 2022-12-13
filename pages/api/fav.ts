import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const updateFav = await prisma.fav.upsert({
        where: {
          email: req.body.userMail,
        },
        update: {
          allFav: JSON.stringify(req.body.allFav),
        },
        create: {
          email: req.body.userMail,
          allFav: JSON.stringify(req.body.allFav),
        },
      });

      res.send({ updateFav });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }

  if (req.method === "GET") {
    try {
      const allfav = await prisma.fav.findMany();
      res.send({ allfav });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
}
