import { Router } from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurant,
  updateRestaurant,
} from "../controllers";

const restaurantRouter = Router();

restaurantRouter.get("/", getAllRestaurant);
restaurantRouter.post("/", createRestaurant);
restaurantRouter.post("/:id", deleteRestaurant);
restaurantRouter.patch("/:id", updateRestaurant);

export default restaurantRouter;
