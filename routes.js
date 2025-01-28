import express from "express";
//import morgan from 'morgan';
//import bodyParser from "body-parser";
import dotenv from "dotenv";
import Data from "./models/Data.js";

dotenv.config();

const router = express.Router();

router.use(express.json());

router.get("/test", (request, response) => {
  response.send("Hello, World root!");
});

router.get("/getAllData", async (request, response) => {
  try {
    const cards = await Data.find();
    response.json(cards);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.post("/post", async (request, response) => {

  const formData = request.body;
  
  const data = new Data({
    name: formData.name,
    img: formData.img,
    information: { 
      strength: formData.strength, 
      lives: formData.lives
     },
    text: formData.text
  });

  try {
    const dataToSave = await data.save();
    response.status(200).json(dataToSave);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

export default router;
