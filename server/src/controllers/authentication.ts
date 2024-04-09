import express from "express";
import jwt from "jsonwebtoken";

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
      return res.status(404).json({ message: "Email does not exit" });
    }

    const expectedHash = authentication(user.salt, password);

    if (user.password !== expectedHash) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    await prisma.account.update({
      where: {
        id: user.id,
      },
      data: {
        token: token,
      },
    });

    return res
      .status(200)
      .json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
        message: "Login Successful",
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
      return res.status(400).json({ message: "Invalid data" });
    }

    const existingUser = await prisma.account.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = random();
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });
    const account = await prisma.account.create({
      data: {
        name,
        email,
        password: authentication(salt, password),
        token: token,
        salt,
      },
    });

    return res
      .status(201)
      .json({
        id: account.id,
        name: account.name,
        email: account.email,
        token: account.token,
        message: "Account created successfully",
      })
      .end();
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
