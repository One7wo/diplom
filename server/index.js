const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const ticketRouter = require("./routes/ticket.routes");

const app = express();
const PORT = config.get("serverPort");
const corsMiddleWare = require("./middleware/cors.middleware");

app.use(corsMiddleWare);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/tickets", ticketRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (e) {}
};

start();
