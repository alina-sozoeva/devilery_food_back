import { AppDataSource } from "../db";
import { Restaurant } from "../entities";
import { Request, Response } from "express";

export const getAllRestaurant = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Restaurant).find();
    res.json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const getRepository = AppDataSource.getRepository(Restaurant);
    const newRepository = getRepository.create(req.body);
    await getRepository.save(newRepository);
    res.status(201).json({ message: "create" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const getRepository = AppDataSource.getRepository(Restaurant);
    await getRepository.update(req.params.id, req.body);
    res.status(201).json({ message: "update" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const getRepository = AppDataSource.getRepository(Restaurant);
    await getRepository.delete(req.params.id);
    res.status(200).json({ message: "delete" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
