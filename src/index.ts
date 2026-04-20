import express from "express";
import restaurantRouter from "./routes/restaurant.routes";

import cors from "cors";
import foodRouter from "./routes/food.routes";

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use("/restaurants", restaurantRouter);
app.use("/food", foodRouter);

export default app;
