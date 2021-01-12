import React, { Component } from 'react'

export default class search extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:''
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        var onSearch={
            filter:e.target.name==="name"? e.target.value:this.state.name
        }
        this.props.search(onSearch);
    }
    onSubmit=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-input-product-main"  name="form-search">
                <input id="input" name="name" onChange={this.onChange} autoComplete="off" className="form-input-product" type="text" placeholder="Filter name..." />
                <span id="error-input"  className="error-input">Vui lòng nhập tên sản phẩm</span>
            </form>
        )
    }
}
