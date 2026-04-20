import { Router } from "express";
import { getAllFood } from "../controllers";

const foodRouter = Router();

foodRouter.get("/", getAllFood);

export default foodRouter;
