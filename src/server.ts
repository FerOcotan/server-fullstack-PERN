// src/index.ts (o server.ts)
import dotenv from "dotenv";
dotenv.config();                          // 1️⃣ carga variables de .env

import colors from "colors";
import express from "express";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import router from "./router";
import db from "./config/db";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Database synchronized");
    console.log(colors.bgGreen.white("Database connected"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
connectDB();

const server = express();

// 2️⃣ Prepara tu lista de orígenes permitidos
const allowedOrigins = [
  process.env.FRONTEND_URL,  // debe ser exactamente "http://localhost:5173"
];

// 3️⃣ Configura CORS UNA SÓLA VEZ
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // permitir Postman/Curl (origin === undefined)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error(`CORS no permitido para origen ${origin}`));
  },
  methods: ["GET","POST","PATCH","PUT","DELETE","OPTIONS"],
  credentials: true,
};

server.use(cors(corsOptions));  // ¡solo esta línea!
server.use(express.json());
server.use(morgan("dev"));

// 4️⃣ Tus rutas (incluye en router el PATCH /:id que togglea availability)
server.use("/api/products", router);

export default server;
