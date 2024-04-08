import express from "express";

import { authentication, random } from "../helpers";
import prisma from "../lib/prisma";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400);
    }

    const user = await prisma.account.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res
        .status(400)
        .json({ statusText: "Not Found", message: "User not found" });
    }

    const expectedHash = authentication(user.salt, password);

    if (user.password !== expectedHash) {
      return res
        .status(403)
        .json({ statusText: "Forbidden", message: "Invalid password" });
    }

    const salt = random();

    await prisma.account.update({
      where: {
        id: user.id,
      },
      data: {
        token: authentication(salt, user.id.toString()),
      },
    });

    // res.cookie("NGUYEN-HUU-TUAN", user.authentication.sessionToken, {
    //   domain: "localhost",
    //   path: "/",
    // });

    return res
      .status(200)
      .json({
        data: { ...user },
        statusText: "OK",
        message: "Login successfully",
      })
      .end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error" });
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ statusText: "Forbidden", message: "Invalid data" });
    }

    const existingUser = await prisma.account.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ statusText: "Forbidden", message: "Email already exists" });
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
        statusText: "OK",
        message: "Account created successfully",
      })
      .end();
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
