const express = require("express");
const { connection } = require("./config/db");
const { productRouter } = require("./Routes/user.route");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use("/product", productRouter);





app.listen(8050, async () => {
  try {
    await connection;
    console.log("Connected to db successfully");
  } catch (e) {
    console.log(e);
    console.log({ err: "Something went Wrong" });
  }
  console.log("Listening on Port 8050");
});
