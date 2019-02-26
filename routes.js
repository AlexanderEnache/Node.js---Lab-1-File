"use strict";

const express = require("express");
const cart    = express.Router();

let idCount = 0;

let cartList = [];

cart.get("/cart-items", function(req, res){
	res.send(cartList);
});

cart.post("/cart-items", function(req, res){
	
	cartList.push({
		product :req.body.product,
		price   :req.body.price,
		quantity:req.body.quantity,
		id      :idCount++
	});
	
	res.send(cartList);
	
});

cart.put("/cart-items/:id", function(req, res){
	console.log(req.params.id);
	for(let i = 0; i < cartList.length; i++){
		if(cartList[i].id == req.params.id){
			cartList.splice(i, 1,
			{
				product:  req.body.product, 
				price:    req.body.price,
				quantity: req.body.quantity
			});
			break;
		}
	}
});

cart.delete("/cart-items/:id", function(req, res){
	for(let i = 0; i < cartList.length; i++){
		if(cartList[i].id == req.params.id){
			cartList.splice(i, 1);
			break;
		}
	}
});

module.exports = cart;











