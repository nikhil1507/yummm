const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  recepieDetails: {
    todayFresh: [
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

const Recepie = mongoose.model("Recepie", schema);

router.get("/", async (req, res) => {
  const data = await Recepie.find();
  res.send(data);
});

router.post("/add", async (req, res) => {
  const recepie = new Recepie({
    recepieDetails: {
      todayFresh: [
        {
          foodType: "Breakfast",
          dishName: "Bread Butter",
          calories: "150 cal",
          time: "15 mins",
          serving: "2 servings",
          image: "../assets/Images/fresh_recipe_2.png",
          recepie: "kjdbfjkdskjbksjbgjkvndkwv jk VJDK ddkj  JKJ jf vk",
        },
      ],
    },
  });

  const result = await recepie.save();
  res.send(result);
});

module.exports = router;
