import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method === "POST") {
  //   try {
  //     // const users: any = await prisma.fav.create({
  //     //   data: {
  //     //     favId: req.body.id,
  //     //     userMail: req.body.userMail,
  //     //   },
  //     // });
  //     const updateFav = await prisma.fav.upsert({
  //       where: {
  //         userMail:null
  //       },
  //       update: {
  //         favId:
  //       }
  //     })
  //     res.send({ updateFav});
  //   } catch (err) {
  //     res.status(400).send({ error: err });
  //   }
  // }
};
