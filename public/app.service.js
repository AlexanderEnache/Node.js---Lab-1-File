"use strict";

const CartService = function($http){
	
	this.Get = function(){
		return $http({
			method: "GET",
			url: "/cart"
		});
	}
	
 	this.Post = function(product, price, quantity){
		return $http({
			method: "POST",
			url: "/cart",
			data: { 
				product: product, 
				price:   Number(price),
				quantity:Number(quantity)
			}
		});
	}
	
	this.Put = function(product, quantity){	
		return $http({
			method: "PUT",
			url: `/cart`,
			data: { 
				product: product, 
				quantity:quantity
			}
		});
	}
	
	this.Delete = function(id){
		return $http({
			method: "DELETE",
			url: `/cart/${id}`
		});
	}
	
}

angular.module("App").service("CartService", CartService);