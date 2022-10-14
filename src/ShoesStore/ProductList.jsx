import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

  renderShoes = () => {
    return this.props.arrayShoes.map((shoes) => {
        return <div className="col-4" key={`shoes-${shoes.id}`}>
           <ProductItem showDetail={this.props.showDetail} shoes={shoes}/>
        </div>
    })
}

  render() {
    return (
      <div className="col-9">
      <h2 style={{ color: '#9293A3' }} className='text-center'>Shoes shop</h2>
      <div className="row">
          {this.renderShoes()}
      </div>
  </div>
    )
  }
}
