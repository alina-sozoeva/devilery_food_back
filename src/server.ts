import "dotenv/config";
import app from "./index";
import { AppDataSource } from "./db";

const PORT = process.env.PORT;

const start = async () => {
  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
