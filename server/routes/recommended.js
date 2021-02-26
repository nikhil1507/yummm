const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  recepieDetails: {
    recommended: [
      {
        foodType: String,
        dishName: String,
        calories: String,
        time: String,
        serving: String,
        image: String,
        recepie: String,
      },
    ],
  },
});

const Recommend = mongoose.model("Recommend", schema);

router.get("/", async (req, res) => {
  const data = await Recommend.find();
  res.send(data);
});

router.post("/add", async (req, res) => {
  const recepie = new Recommend({
    recepieDetails: {
      recommended: [
        {
          foodType: "Snack",
          dishName: "Garlic Bread",
          calories: "150 cal",
          time: "20 mins",
          serving: "1 serving",
          image: "../assets/Images/reco_3.png",
          recepie: "kjdbfjkdskjbksjbgjkvndkwv jk VJDK ddkj  JKJ jf vk",
        },
      ],
    },
  });

  const result = await recepie.save();
  res.send(result);
});

module.exports = router;
