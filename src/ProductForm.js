import React, { Component } from 'react';

export default class ProductForm extends Component {

  constructor(props) {
    super(props);

    this.setState({});

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(event){
  	event.preventDefault();
  	
  	this.props.createProduct(
  		this.state.name, 
  		this.state.price, 
  		this.state.quantity);
  }

  handleNameChange(event) {
   this.setState({name: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleQuantityChange(event) {
    this.setState({quantity: event.target.value});
  }

  render() {
    return (
    	<form class="form-inline">
			<div class="form-group" style={{marginRight: 10 +'px'}}>
			    <label  class="sr-only"  for="form-name">Name</label>
			    <input type="text" class="form-control" id="form-name" placeholder="Insert name" onChange={this.handleNameChange}/>
			</div>
			<div class="form-group" style={{marginRight: 10 +'px'}}>
		        <label class="sr-only"  for="form-price">Price</label>
		        <input type="text" class="form-control" id="form-price" placeholder="Price" onChange={this.handlePriceChange}/>
		    </div>
			<div class="form-group" style={{marginRight: 10 +'px'}}>
				<label  class="sr-only"  for="form-quantity">Quantity</label>
				<input type="text" class="form-control" id="form-quantity" placeholder="Quantity" onChange={this.handleQuantityChange}/>
			</div>
			<button type="submit" class="btn btn-primary" onClick={this.addProduct}>Add Product</button>
    	</form>
    );
  }
}


