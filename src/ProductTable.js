import React, { Component } from 'react';
import ProductTableRow from './ProductTableRow'

export default class ProductTable extends Component {
  render() {

  	var products = this.props.listProducts.map( (elem,index) => (
		<tr>
			<td>{elem.name}</td>
			<td>{elem.price}</td>
			<td>{elem.quantity}</td>
			<td><button class="btn" onClick={() => { this.props.deleteProduct(index)}}>Delete</button></td>
		</tr> ));

    return (
    	<table class="table table-striped">
    		<thead>
		    	<tr>
		    		<th>name</th>
		    		<th>price</th>
		    		<th>quantity</th>
		    		<th>options</th>
		    	</tr>
	    	</thead>
	    	<tbody>
	    		{products}
	    	</tbody>
    	</table>
    );
  }
}


