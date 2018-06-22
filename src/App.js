import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

export default class App extends Component {

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

    const ListProducts = (props) => {
        return (
          <ProductTable listProducts={this.state.listProducts} deleteProduct={this.deleteProduct}/>
        );
    };

    const FormProducts = (props) => {
        return (
          <ProductForm createProduct={this.createProduct}/>
        );
    };

    return (

      <Router>
        <div>
                  <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Produtcs</a>
              </div>

              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li><Link to={'/'}>List of Products</Link></li>
                  <li><Link to={'/form'}>Insert a product</Link></li>
                </ul>
              </div>
            </div>
          </nav>          
          <Switch>
            <Route exact path='/' component={ListProducts} />
            <Route exact path='/form' component={FormProducts} />
          </Switch>
        </div>
      </Router>
    );
  }
}


