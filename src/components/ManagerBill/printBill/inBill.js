import React, { Component } from 'react';
// import ReactToPrint from "react-to-print";

 class inBill extends Component {
    render() {
        console.log(this.props.showInBill);
        return (
            <>
               {this.props.showInBill}
          </>
        )
    }
}
export default inBill;