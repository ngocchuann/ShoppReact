import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {shoes,showDetail} = this.props
    return (
      <div className="card">
                <img src={shoes.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{shoes.name}</h5>
                    <div className='card-icon'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="card-text">{shoes.price} $</p>
                    <div className='card-bottom'>
                        <button onClick={() => {
                            showDetail(shoes)
                        }} className="button" data-toggle="modal" data-target="#modelId">add to carts  <i className="fa-solid fa-cart-shopping" /></button>
                    </div>
                </div>
            </div>
    )
  }
}
