import { Request, Response } from "express";

// models
// @ts-ignore
import db from "../../models/index.js";

export const getCreditCards = async (req: Request, res: Response) => {
  const creditCards = await db.CreditCard.findAll();
  res.send(creditCards);
};
