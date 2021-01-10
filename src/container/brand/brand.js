/* eslint-disable array-callback-return */
import React, { Component } from "react";
import Brand from "./../../components/ManagerBrand/brand";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import BrandItem from "./../../components/ManagerBrand/brandItem";
import * as actions from "./../../actions/brand";
import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

class brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: 1,
      currentPage:1,
      currentPageNew:10
    };
  }
  render() {
    // document.title="Quản lý brands ... ";
    var { BrandStoreFirebase, BrandMessage } = this.props;
    if (
      BrandMessage.Brand_Update_Success ||
      BrandMessage.Brand_Delete_Success
    ) {
      setTimeout(() => {
        this.resetBrandMessage_update();
      }, 1000);
    }
    BrandStoreFirebase = this.sortBrand(BrandStoreFirebase, this.state.value);
    return (
      <>
        <Dialog
          open={
            BrandMessage.Brand_Delete_Request ||
            BrandMessage.Brand_Update_Request
          }
        >
          <DialogContent>
            <CircularProgress aria-labelledby="simple-dialog-title" />
          </DialogContent>
        </Dialog>
        <Brand
          showBrand={this.showBrand(BrandStoreFirebase)}
          BrandMessage={BrandMessage}
          onSort={this.onSort}
          showPagination={this.showPagination(BrandStoreFirebase)}
        />
      </>
    );
  }
  showPagination=(brands)=>{
    var {currentPage,currentPageNew}=this.state;
    if(brands){
      return <Pagination 
        page={currentPage} count={Math.ceil(brands.length/currentPageNew)}
        size="small"
        onChange={this.onHandlePagination}
     />
    }
  }
  onHandlePagination=(e,value)=>{
    this.setState({
      currentPage:value
    });
  }
  showBrand = (data) => {
    if (!data) {
      return (
        <Dialog open={true}>
          <DialogContent>
            <CircularProgress aria-labelledby="simple-dialog-title" />
          </DialogContent>
        </Dialog>
      );
    }

    if(data){
      var {currentPage,currentPageNew}=this.state;
      var pageLast=currentPage*currentPageNew;
      var pageFirst=pageLast- currentPageNew;
      data=data.slice(pageFirst,pageLast);
      return data.map((brands, key) => (
        <BrandItem
          brand={brands}
          key={key}
          keys={key}
          onDeleteBrand={this.onDeleteBrand}
          updateBrand={this.updateBrand}
        />
      ));
    }
  };
  onDeleteBrand = (brandDelete) => {
    this.props.onDeleteBrand(brandDelete);
  };
  componentDidMount() {
    this.props.resetBrandMessage();
    this.props.BrandAllFirebase();
    document.title="Quản lý brand...";
  }
  resetBrandMessage_update = () => {
    this.props.resetBrandMessage_Update();
  };
  updateBrand = (brandNew) => {
    this.props.updateBrand(brandNew);
  };
  onSort = (value) => {
    this.setState({
      name: value.name,
      value: value.value,
    });
  };
  sortBrand = (data, value) => {
    data =
      data &&
      data.slice().sort((a, b) => {
        if (a.brandName > b.brandName) {
          return value;
        } else {
          return -value;
        }
      });
    return data;
  };
}
const mapSateToProps = (state) => {
  return {
    BrandStoreFirebase: state.getFirestore.ordered.brand,
    BrandMessage: state.BrandMessage,
    GetBrand:state.GetBrand
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    onDeleteBrand: (brand) => {
      dispatch(actions.DeleteBrandRequest(brand));
    },
    resetBrandMessage: () => {
      dispatch(actions.ResetMessage());
    },
    updateBrand: (brand) => {
      console.log(brand);
      dispatch(actions.UpdateBrandRequest(brand));
    },
    resetBrandMessage_Update: () => {
      dispatch(actions.ResetMessage());
    },
    BrandAllFirebase:()=>{
      dispatch(actions.BrandAllFirebase());
    }
  };
};
export default compose(
  connect(mapSateToProps, dispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "brand",
    },
  ])
)(brand);
