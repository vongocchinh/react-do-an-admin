
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
                    Sort
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item  onClick={()=>this.onSort('name',1)}>A-Z</Dropdown.Item>
                        <Dropdown.Item  onClick={()=>this.onSort('name',-1)}>Z-A</Dropdown.Item>
                        <hr/>
                        <Dropdown.Item  onClick={()=>this.onSort('status',1)}>Hide</Dropdown.Item>
                        <Dropdown.Item  onClick={()=>this.onSort('status',-1)}>Show</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
            </>
            
        )
    }
}
