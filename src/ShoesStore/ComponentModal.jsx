import React, { Component } from 'react'

export default class ComponentModal extends Component {
    render() {
        let { chiTietShoes } = this.props
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-3">
                                    <h3>{chiTietShoes.name}</h3>
                                    <img className='img-fluid' src={chiTietShoes.image} alt="" />
                                </div>
                                <div className="col-9">
                                    <h2>Detail</h2>
                                    <table className="table">
                                        <thead>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{chiTietShoes.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Alias</td>
                                                <td>{chiTietShoes.alias}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>{chiTietShoes.price} $</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td>{chiTietShoes.description}</td>
                                            </tr>
                                            <tr>
                                                <td>ShortDescription</td>
                                                <td>{chiTietShoes.shortDescription}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

