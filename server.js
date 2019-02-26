"use strict";

const express = require("express");
const app = express();
const cart = require("./routes.js");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", cart);

app.listen(3000, function(){
	console.log("Server running");
});