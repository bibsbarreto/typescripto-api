import { Request, Response } from "express";

const users = [
  {
    name: "Bianca",
    email: "email@email.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
