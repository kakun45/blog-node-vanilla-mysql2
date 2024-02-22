// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

// In ES2020, you can use the same syntax to achieve the redirection of requests to a specific endpoint: MUST have .js
import postRoutes from "./routes/postRoutes.js";

// const express = require("express");
import express from "express"; // To import Express in ES2020 (ECMAScript 2020).
const app = express();

// Middleware is added before defining the route. This middleware will parse incoming request bodies with JSON payloads and make the parsed JSON data available in req.body for routes that handle POST requests.
app.use(express.json()); // parse json bodies in req objects

// Redirect req to endpoint starting with /post to postRoutes.js
app.use("/posts", postRoutes);

// Catch Global error handler with next Fn. IMPORTANT function parems MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went really wrong",
  });
});

// listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
