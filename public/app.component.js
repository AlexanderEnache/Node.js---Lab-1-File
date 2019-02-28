"use strict";

const shoppingCart = {
	
	template: `
	
		<h1>Shopping List</h1>
		
		<h3>Add Items here</h3>
		<input ng-model="$ctrl.product" type="textbox" placeholder="product name">
		<input ng-model="$ctrl.price" type="textbox" placeholder="price">
		<input ng-model="$ctrl.quantity" type="textbox" placeholder="how many">
		<button ng-click="$ctrl.Post($ctrl.product, $ctrl.price, $ctrl.quantity)">Add</button>
		
		<h3>Delete item</h3>
		<input ng-model="$ctrl.id3" type="textbox" placeholder="id of item">
		<button ng-click="$ctrl.Delete($ctrl.id3)">Delete</button>
		
		<div ng-repeat="item in $ctrl.Arr | orderBy: 'product'">
		
			<p>product: {{item.product}}</p>
			<p>price: {{item.price}}</p>
			<p>quantity: {{item.quantity}}</p>
		<button ng-click="$ctrl.Put(item.product, item.quantity, true)">+</button>
		<button ng-click="$ctrl.Put(item.product, item.quantity, false)">-</button>
			<p>id: {{item.id}}</p>
		</div>
	
	`,
	
	controller: ["CartService", function(CartService){
		
		CartService.Get().then((response) => {
			this.Arr = response.data;
		});
		
		this.Get = function(){
			CartService.Get().then((response) => {
				this.Arr = response.data;
			});
		}
		
		this.Post = function(product, price, quantity){
			
			CartService.Post(product, price, quantity).then((response) => {
			});
			
			CartService.Get().then((response) => {
				this.Arr = response.data;
			});
			
			this.product = "";
			this.price = "";
			this.quantity = "";
		}
		
		this.Put = function(product, quantity, add){
			
			if(add){
				CartService.Put(product, Number(quantity)+1);
			}else{
				if(Number(quantity)){
					CartService.Put(product, Number(quantity)-1);
				}
			}
			
			CartService.Get().then((response) => {
				this.Arr = response.data;
			});
			
			this.product2 = "";
			this.price2 = "";
			this.quantity2 = "";
			this.id2 = "";
		}
		
		this.Delete = function(id){
			CartService.Delete(id);
			this.id3 = "";
			CartService.Get().then((response) => {
				this.Arr = response.data;
			});		
		}
		
	}]
	
}

angular.module("App").component("shoppingCart", shoppingCart);