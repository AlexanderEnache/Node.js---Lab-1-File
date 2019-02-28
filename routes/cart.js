"use strict";

const express = require("express");
const cart = express.Router();
const pool = require("./connection");

cart.get("/cart", function(req, res){
	pool.query("select * from ShoppingCart").then(function(result){
		res.send(result.rows);
	});
});

cart.post("/cart", function(req, res){
	pool.query("insert into ShoppingCart(product, price, quantity) values ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(function(){
		pool.query("select * from ShoppingCart").then(function(result){
			res.send(result.rows);
		});
	});
});

cart.put("/cart", function(req, res){
	console.log("changing");
	pool.query("update ShoppingCart set quantity=$1::int where product=$2::text", [req.body.quantity, req.body.product]).then(function(){
		pool.query("select * from ShoppingCart").then(function(result){
			res.send(result.rows);
		});
	});
});

cart.delete("/cart/:id", function(req, res){
	pool.query("delete from ShoppingCart where id=$1::int", [req.params.id]).then(function(){
		pool.query("select * from ShoppingCart").then(function(result){
			res.send(result.rows);
		});
	});
});

module.exports = cart;