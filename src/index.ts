import express from "express";
import restaurantRouter from "./routes/restaurant.routes";

const app = express();

app.use(express.json());
app.use("/restaurants", restaurantRouter);

export default app;
