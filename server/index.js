
require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const auth = require("./auth");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(cookieSession({
  name: "session", 
  keys: ["blam"], 
  maxAge: 24 * 60 * 60 * 100
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin:"http://localhost:3000",
  methods: "GET, PUT, POST, DELETE",
  credentials: true
}));

app.use("/auth", authRoutes);
app.listen("6000", () => {
  console.log("Listening on port 6000");
});

