import express from "express";
import database from "./config/dbConnect";
import router from "./routes";
import cors from "cors";

const $PORT = process.env.PORT || 3000;

database.on("error", console.log.bind(console, "Erro de conexão"));
database.once("open", () => {
  console.log("Connected with database.");
});

const app = express();
app.use(cors());
router(app);

app.listen($PORT, () => console.log(`Server is running on port ${$PORT}.`));
