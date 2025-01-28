import express from "express";
import { PORT } from "./config.js";
import routes from './routes.js'
import mongoose from "./db.js";
import cors from "cors"


const app = express();

const allowedOrigins = true; //["http://localhost:3000", "http://localhost:3005"]//til info across servers
app.use(cors({

  origin:allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus:204,
  
}));

app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
   
console.log("Server Listening and is ready on PORT:", port);
});