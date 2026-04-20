import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Food } from "../entities";

export const getAllFood = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Food).find();
    res.json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
