import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
export default class addProduct extends Component {
    render() {
        return (
            <div className="text-left">
                <p className="table-text button-add-product"> 
                    <Link to="/productAdd" className="button-add-product">
                        <Fab color="primary" aria-label="add" size="small" className="button-add-product">
                            <AddIcon  className="button-add-product">
                            </AddIcon>
                        </Fab>
                    </Link>
                </p>
            </div>
        )
    }
}
