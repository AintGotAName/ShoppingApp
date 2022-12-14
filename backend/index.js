import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
