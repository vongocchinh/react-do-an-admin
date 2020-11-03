import React, { Component } from 'react'

export default class search extends Component {
    constructor(props) {
        super(props);
        this.state={
            search:''
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
           
        });
        var onSearch={
                search:e.target.name==="search"? e.target.value:this.state.search
        }
        this.props.search(onSearch);
    }
    onSubmit=(e)=>{
        e.preventDefault();
        
        
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-input-product-main"  name="form-search">
                <input id="input" name="search" onChange={this.onChange} autoComplete="off" className="form-input-product" type="text" placeholder="Search" />
                <span id="error-input"  className="error-input">Vui lòng nhập tên sản phẩm</span>
            </form>
        )
    }
}
