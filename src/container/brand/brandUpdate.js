/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import BrandUpdate from './../../components/ManagerBrand/brandUpdate/brandUpdate';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import BrandForm from './../../components/ManagerBrand/brandUpdate/brandForm';
import * as actions from '../../actions/brand';
 class brandUpdate extends Component {
     constructor(props) {
         super(props);
         this.state={
             idUpdate:''
         }
         
     }
     componentDidMount(){
        var id=this.props.match.params.id;
        this.setState({
            idUpdate:id
        });
        
     }
     showData=(Data,id)=>{
         var result='';
        result=(Data && Data.map((data,key)=>{
            if(data.id===id){
                return <BrandForm brand={data} key={key} 
                updateBrand={this.props.updateBrand}
                />
            }
        }))
         return result;
     }
    render() {
        
        
        var {brandUpdate}=this.props;
        var id=this.state.idUpdate;
        return (
           <BrandUpdate
                showData={this.showData(brandUpdate,id)}
                
           />
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        brandUpdate:state.getFirestore.ordered.brand
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        updateBrand:(brand)=>{
            dispatch(actions.UpdateBrandRequest(brand));
        }
    }
}
export default 
compose(connect(mapStateToProps,dispatchToProps),
firestoreConnect(ownProps=>[
    {
        collection:"brand",
    }
])
)
(brandUpdate);