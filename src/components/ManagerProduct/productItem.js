/* eslint-disable no-useless-concat */
import { Switch } from "@material-ui/core";
import React, { Component } from "react";
import IconDe from "./../images/de.png";
import IconU from "./../images/e.png";
import * as Format from "./../../conStants/format";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

export default class productItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      statusProduct: false,
      openDelete: false,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.check,
    });
    this.setState({
      check: !this.state.check,
    });
  };
  onDelete = () => {
    this.setState({
      openDelete: true,
    });
  };
  handleCloseDelete = () => {
    this.setState({
      openDelete: false,
    });
  };
  handleOnDelete = () => {
    this.setState({
      openDelete: false,
    });
    this.props.onDelete(this.props.product);
  };
  onStatus = () => {
    this.props.onStatus(this.props.product);
  };
  UNSAFE_componentWillMount() {
    this.setState({
      statusProduct: this.props.product.statusProduct,
    });
  }
  render() {
    var { product } = this.props;
    var { keys } = this.props;
    return (
      <>
        <tbody>
          <tr>
            <td>{keys + 1}</td>
            <td>{product.name}</td>
            <td style={{ height: "100px", width: "90px" ,borderStyle:"solid",borderWidth:"1px",borderColor:"#DFDFDF",
            margin:"5px",
            borderRadius:"3px"}}>
              <img
                alt={product.images1}
                style={{ height: "80px", width: "80px" ,}}
                src={product.images1}
              />
            </td>
            <td>{product.quantity} </td>
            <td>
              <Link
                to={
                  "/" +
                  "product" +
                  "/" +
                  product.id +
                  "/" +
                  Format.to_slug(product.name)
                }
                className="button-add-product-detail"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="option-table button-add-product-detail"
                >
                  Chi tiết
                </Button>
              </Link>
            </td>
            <td>{Format.FORMAT_CURRENT(product.price)} vnđ</td>
            <td>{Format.FORMAT_CURRENT(product.priceSale)} %</td>
            <td>
              <Switch
                checked={product.statusProduct}
                onChange={this.onChange}
                name="check"
                onClick={this.onStatus}
              />
            </td>
            <td className="option">
              <a onClick={this.onDelete} href="###">
                {" "}
                <img alt="###" src={IconDe} />
              </a>
              <Link
                to={
                  "/update-product/" +
                  product.id +
                  "/" +
                  Format.to_slug(product.name)
                }
                href="product_edit.html"
              >
                <img alt="###" src={IconU} />
              </Link>
            </td>
          </tr>
        </tbody>
        <Dialog
          open={this.state.openDelete}
          onClose={this.handleCloseDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you want to remove this product{" "}
              <span style={{ color: "red" }}>{this.props.product.name}</span>{" "}
              from the list, the delete selection will not be restored. !!!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDelete} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOnDelete} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
