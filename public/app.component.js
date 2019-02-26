"use strict";

const shoppingCart = {
	
	template: `
	
		<h1>Shopping List</h1>
		
		<h3>Add Items here</h3>
		<input ng-model="$ctrl.product" type="textbox" placeholder="product name">
		<input ng-model="$ctrl.price" type="textbox" placeholder="price">
		<input ng-model="$ctrl.quantity" type="textbox" placeholder="how many">
		<button ng-click="$ctrl.Post($ctrl.product, $ctrl.price, $ctrl.quantity)">Add</button>
		
		<h3>Edit list here</h3>
		<input ng-model="$ctrl.product2" type="textbox" placeholder="product name">
		<input ng-model="$ctrl.price2" type="textbox" placeholder="price">
		<input ng-model="$ctrl.quantity2" type="textbox" placeholder="how many">
		<input ng-model="$ctrl.id2" type="textbox" placeholder="id of current item">
		<button ng-click="$ctrl.Put($ctrl.product2, $ctrl.price2, $ctrl.quantity2, $ctrl.id2)">Edit</button>
		
		<h3>Delete item</h3>
		<input ng-model="$ctrl.id3" type="textbox" placeholder="id of item">
		<button ng-click="$ctrl.Delete($ctrl.id3)">Delete</button>
		
		<div ng-repeat="item in $ctrl.Arr">
		
			<p>product: {{item.product}}</p>
			<p>price: {{item.price}}</p>
			<p>quantity: {{item.quantity}}</p>
			<p>id: {{item.id}}</p>
		
		</div>
	
	`,
	
	controller: ["CartService", function(CartService){
		
		this.Get = function(){
			CartService.Get().then((response) => {
				this.Arr = response.data;			
			});
		}
		
		this.Post = function(product, price, quantity){
			CartService.Post(product, price, quantity);
			this.Get();
			
			this.product = "";
			this.price = "";
			this.quantity = "";
		}
		
		this.Put = function(product, price, quantity, id){
			CartService.Put(product, price, quantity, id);
			this.Get();
			
			this.product2 = "";
			this.price2 = "";
			this.quantity2 = "";
			this.id2 = "";
		}
		
		this.Delete = function(id){
			CartService.Delete(id);
			this.Get();			
		}
		
	}]
	
}

angular.module("App").component("shoppingCart", shoppingCart);