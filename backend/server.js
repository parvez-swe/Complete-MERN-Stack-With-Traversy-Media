const express = require("express");
const { getGoals } = require("./controllers/goalController");
const dotenv = require("dotenv").config();
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");

connectDB();

const app = express();

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: [process.env.FRONTEND_URL_1],
  })
);
//middleware for Row json
app.use(express.json());
//middleware for extended url data
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

//serv frontend

if (process.env.NODE_ENV === "production") {
}

app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));
