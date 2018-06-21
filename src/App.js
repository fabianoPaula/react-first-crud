import React, { Component } from 'react';
import './App.css';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { listProducts: [] } ;

    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

  }

  createProduct(name, price, quantity){
    this.setState(prevState => ({ listProducts: 
      prevState.listProducts.concat({name: name, price: price, quantity: quantity })
      } ));
  }

  deleteProduct(index){
    this.setState(prevState => ({ listProducts: 
      prevState.listProducts.splice(index)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de Produtos </h1>
        <ProductTable listProducts={this.state.listProducts} deleteProduct={this.deleteProduct}/>
        <br />
        <hr />
        <br />
        <ProductForm createProduct={this.createProduct}/>
      </div>
    );
  }
}

export default App;
