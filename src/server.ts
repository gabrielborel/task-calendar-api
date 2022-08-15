import express from "express";
import database from "./config/dbConnect";
import router from "./routes";

const $PORT = 3333;

database.on("error", console.log.bind(console, "Erro de conexão"));
database.once("open", () => {
  console.log("Connected with database.");
});

const app = express();
router(app);

app.listen($PORT, () => console.log(`Server is running on port ${$PORT}.`));
