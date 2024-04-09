import express from "express";
import jwt from "jsonwebtoken";

import prisma from "../lib/prisma";

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const sessionToken = req.headers.authorization?.split(" ")[1];

    jwt.verify(sessionToken, process.env.JWT_SECRET);

    if (!sessionToken) {
      return res.status(401).json({ message: "Không có token" });
    }

    const user = await prisma.account.findUnique({
      where: {
        email: "nhtuan010302@gmail.com",
      },
    });

    return res
      .status(200)
      .json({ ...user, message: "Có Token" })
      .end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error" });
  }
};
