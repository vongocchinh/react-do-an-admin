
import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
export default class sort extends Component {
    onSort=(sortBy,sortValue)=>{
        var sort={
            sortBy:sortBy,
            sortValue:sortValue
        }
        this.props.onSortRedux(sort);
       
    }

    render() {
        return (
            <>
                <Dropdown className="dropDown-button">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="mr-3 button-blue">
                    SortProduct
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item  onClick={()=>this.onSort('name',1)}>Từ A-z</Dropdown.Item>
                        <Dropdown.Item  onClick={()=>this.onSort('name',-1)}>Từ Z-A</Dropdown.Item>
                        <hr/>
                        <Dropdown.Item  onClick={()=>this.onSort('status',1)}>Theo Status +</Dropdown.Item>
                        <Dropdown.Item  onClick={()=>this.onSort('status',-1)}>Theo Status -</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
            </>
            
        )
    }
}
