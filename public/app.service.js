"use strict";

const CartService = function($http){
	
	this.Get = function(){
		return $http({
			method: "GET",
			url: "/cart-items"
		});
	}
	
 	this.Post = function(product, price, quantity){
		return $http({
			method: "POST",
			url: "/cart-items",
			data: { 
				product: product, 
				price:   price,
				quantity:quantity
			}
		});
	}
	
	this.Put = (product, price, quantity, id) => {		
		return $http({
			method: "PUT",
			url: `/cart-items/${id}`,
			data: { 
				product: product, 
				price:   price,
				quantity:quantity
			}
		});
	}
	
	this.Delete = function(id){
		return $http({
			method: "DELETE",
			url: `/cart-items/${id}`
		});
	}
	
}

angular.module("App").service("CartService", CartService);