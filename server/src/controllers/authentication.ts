import express from "express";

import { authentication, random } from "../helpers";
import prisma from "../lib/prisma";

// export const login = async (req: express.Request, res: express.Response) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400);
//     }

//     const user = await getUserByEmail(email).select(
//       "+authentication.salt +authentication.password"
//     );

//     if (!user) {
//       return res.status(400);
//     }

//     const expectedHash = authentication(user.authentication.salt, password);

//     if (user.authentication.password !== expectedHash) {
//       return res.status(403);
//     }

//     const salt = random();
//     user.authentication.sessionToken = authentication(
//       salt,
//       user._id.toString()
//     );

//     await user.save();

//     res.cookie("NGUYEN-HUU-TUAN", user.authentication.sessionToken, {
//       domain: "localhost",
//       path: "/",
//     });

//     return res.status(200).json(user).end();
//   } catch (error) {
//     console.log(error);
//     return res.status(400);
//   }
// };

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ ok: false, message: "Invalid data" });
    }

    const existingUser = await prisma.account.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ ok: false, message: "Email already exists" });
    }

    const salt = random();
    const account = await prisma.account.create({
      data: {
        name,
        email,
        password: authentication(salt, password),
        token: authentication(salt, email),
        salt,
      },
    });

    return res
      .status(201)
      .json({
        data: { ...account },
        ok: true,
        message: "Account created successfully",
      })
      .end();
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
