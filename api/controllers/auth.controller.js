import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hash(password, 10);
  console.log(hashedPassword);
  
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
};

export const login = (req, res) => {
  // db op
};

export const logout = (req, res) => {
  // db op
};
