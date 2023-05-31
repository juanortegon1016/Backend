import express from "express";
import * as dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import {DBconnection} from "./database/configMongoDB.js"
import user from "./routes/users.routes.js";
import msg from "./routes/msg.routes.js";
import cors from "cors";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("se ha conectado");
  socket.on("chat_message", (data) => {
    console.log(data);
    io.emit("chat_message", data);
  });
});

app.use(express.json());
app.use(cors());
app.use("/api/user", user);
app.use("/api/msg", msg);

httpServer.listen(process.env.PORT);

dotenv.config();

DBconnection();