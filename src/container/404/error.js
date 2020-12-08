import React, { Component } from 'react'

 class error extends Component {
    render() {
        return (
            <div className="main-right">
            <div className="main-content-table">
                
                        404
            </div>
            </div>
        )
    }
    componentDidMount(){
        document.title="error";
    }
}
export default error;