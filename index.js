import express from "express";
import ("./connect.js")
import cors from "cors"
const app = express();
import DetailsRoute from "./routes/DetailsRoute.js"
app.use(express.json());
app.use(cors());
//app.use("/uploads", express.static("uploads"));

app.use("/", DetailsRoute);


app.listen(1111, () => {
    console.log(`Server is running on port ` + 1111);
  });