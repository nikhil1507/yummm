const express = require("express");
const app = express();
const mongoose = require("mongoose");
const recepie = require("./routes/recepie");
const recommended = require("./routes/recommended");

app.use(express.json());
app.use("/api/freshRecepie", recepie);
app.use("/api/recommended", recommended);

mongoose
  .connect("mongodb://localhost/Recepie", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
