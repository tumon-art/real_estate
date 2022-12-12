import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const updateFav = await prisma.fav.upsert({
        where: {
          email: req.body.userMail,
        },
        update: {
          allFav: req.body.allFav,
        },
        create: {
          email: req.body.userMail,
          allFav: req.body.allFav,
        },
      });

      res.send({ updateFav });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
};
