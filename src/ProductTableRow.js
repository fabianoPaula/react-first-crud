import React, { Component } from 'react';

export default class ProductTableRow extends Component {
  render() {

    return (
		<tr>
			<td>{this.props.name}</td>
			<td>{this.props.price}</td>
			<td>{this.props.quantity}</td>
		</tr>    
	);
  }
}

