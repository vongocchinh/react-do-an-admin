import React, { Component } from "react";
import { Switch, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { convertFromRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "react-draft-wysiwyg";
const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};
class productForm extends Component {
  constructor(props) {
    super(props);
    const editorState = convertFromRaw(content);
    this.state = {
      id: "",
      brand: "hQQ2jBnPjvilkwB3rl10",
      category: "VOuvvetUI7ZPERUBoFF0",
      camAfter: "",
      camBefore: "",
      cpu: "",
      gpu: "",
      description: editorState,
      images1: "",
      images2: "",
      images3: "",
      images4: "",
      manhinh: "",
      name: "",
      pin: "",
      price: 0,
      priceSale: 0,
      quantity: 0,
      ram: "",
      rom: "",
      star: 0,
      statusProduct: false,
      statusQuantity: false,
      redirect: false,
      keyImages: false,
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const {
      id,
      brand,
      camAfter,
      camBefore,
      category,
      cpu,
      description,
      gpu,
      images1,
      images2,
      images3,
      images4,
      manhinh,
      name,
      pin,
      price,
      priceSale,
      quantity,
      ram,
      rom,
      star,
      statusProduct,
      statusQuantity,
    } = this.state;
    var starINT = parseInt(star, 10);
    var priceINT = parseInt(price, 10);
    var priceSaleINT = parseInt(priceSale, 10);
    var quantityINT = parseInt(quantity, 10);
    var keyImages;
    var keyImages2;
    if (typeof images1 === "string") {
      keyImages = true;
    } else if (typeof images1 === "object") {
      keyImages = false;
    }

    var product = {
      id,
      brand,
      camAfter,
      camBefore,
      category,
      cpu,
      description,
      gpu,
      images1,
      images2,
      images3,
      images4,
      manhinh,
      name,
      pin,
      priceINT,
      priceSaleINT,
      quantityINT,
      ram,
      rom,
      starINT,
      statusProduct,
      statusQuantity,
      keyImages,
      keyImages2,
    };
    if (product) {
      this.props.updateProduct(product);
      this.setState({
        redirect: true,
      });
    }
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onChangeSwitch = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  UNSAFE_componentWillMount() {
    var { product } = this.props;
    if (product) {
      this.setState({
        id: product.id,
        description: product.description,
        brand: product.brand,
        category: product.category,
        camAfter: product.camAfter,
        camBefore: product.camBefore,
        cpu: product.cpu,
        gpu: product.gpu,
        images1: product.images1,
        images2: product.images2,
        images3: product.images3,
        images4: product.images4,
        manhinh: product.manhinh,
        name: product.name,
        pin: product.pin,
        price: product.price,
        priceSale: product.priceSale,
        quantity: product.quantity,
        ram: product.ram,
        rom: product.rom,
        star: product.star,
        statusProduct: product.statusProduct,
        statusQuantity: product.statusQuantity,
      });
    } else {
      this.clear();
    }
  }
  clear = () => {
    this.setState({
      id: "",
      brand: "hQQ2jBnPjvilkwB3rl10",
      category: "VOuvvetUI7ZPERUBoFF0",
      camAfter: "",
      camBefore: "",
      cpu: "",
      gpu: "",
      description: "",
      images1: "",
      images2: "",
      images3: "",
      images4: "",
      manhinh: "",
      name: "",
      pin: "",
      price: 0,
      priceSale: 0,
      quantity: 0,
      ram: "",
      rom: "",
      star: 0,
      statusProduct: false,
      statusQuantity: false,
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.product) {
      this.setState({
        id: nextProps.product.id,
        description: nextProps.product.description,
        brand: nextProps.product.brand,
        category: nextProps.product.category,
        camAfter: nextProps.product.camAfter,
        camBefore: nextProps.product.camBefore,
        cpu: nextProps.product.cpu,
        gpu: nextProps.product.gpu,
        images1: nextProps.product.images1,
        images2: nextProps.product.images2,
        images3: nextProps.product.images3,
        images4: nextProps.product.images4,
        manhinh: nextProps.product.manhinh,
        name: nextProps.product.name,
        pin: nextProps.product.pin,
        price: nextProps.product.price,
        priceSale: nextProps.product.priceSale,
        quantity: nextProps.product.quantity,
        ram: nextProps.product.ram,
        rom: nextProps.product.rom,
        star: nextProps.product.star,
        statusProduct: nextProps.product.statusProduct,
        statusQuantity: nextProps.product.statusQuantity,
      });
    } else {
      this.clear();
    }
  }
  onEditorStateChange = (description) => {
    this.setState({
      description,
    });
  };
  onSubmitImages = (e) => {
    e.preventDefault();
    const {
      id,
      brand,
      camAfter,
      camBefore,
      category,
      cpu,
      description,
      gpu,
      images1,
      images2,
      images3,
      images4,
      manhinh,
      name,
      pin,
      price,
      priceSale,
      quantity,
      ram,
      rom,
      star,
      statusProduct,
      statusQuantity,
    } = this.state;
    var starINT = parseInt(star, 10);
    var priceINT = parseInt(price, 10);
    var priceSaleINT = parseInt(priceSale, 10);
    var quantityINT = parseInt(quantity, 10);
    var keyImages;
    var keyImages2;
    var product = {
      id,
      brand,
      camAfter,
      camBefore,
      category,
      cpu,
      description,
      gpu,
      images1,
      images2,
      images3,
      images4,
      manhinh,
      name,
      pin,
      priceINT,
      priceSaleINT,
      quantityINT,
      ram,
      rom,
      starINT,
      statusProduct,
      statusQuantity,
      keyImages,
      keyImages2,
    };
    if (product) {
      this.props.updateImagesProduct(product);
    }
  };
  render() {
    var {
      brand,
      category,
      camAfter,
      camBefore,
      cpu,
      gpu,
      images1,
      images3,
      images2,
      images4,
      manhinh,
      name,
      pin,
      price,
      priceSale,
      quantity,
      ram,
      rom,
      star,
      statusProduct,
      statusQuantity,
    } = this.state;
    var description = this.state.description;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="main-content-table">
            <p className="menu-table-main">
              <i className="far fa-calendar-alt" />
               Product
            </p>
            <div className="product-edit">
              <div className="row-main">
                <div className="col-main-product">
                  <p className="name-product-edit">Tên sản phẩm</p>
                  <p>
                    <input
                      value={name}
                      name="name"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Hãng Sản phẩm</p>
                  <p>
                    <select
                      name="brand"
                      value={brand}
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    >
                      {this.props.showBrand}
                    </select>
                  </p>
                  <p className="name-product-edit">Loại Sản Phẩm</p>
                  <p>
                    <select
                      name="category"
                      value={category}
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    >
                      {this.props.showCategory}
                    </select>
                  </p>
                  <p className="name-product-edit">Màn hình sản phẩm</p>
                  <p>
                    <input
                      value={manhinh}
                      name="manhinh"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Dung lượng pin</p>
                  <p>
                    <input
                      value={pin}
                      name="pin"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Camera Sau</p>
                  <p>
                    <input
                      value={camAfter}
                      name="camAfter"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Camera trước</p>
                  <p>
                    <input
                      value={camBefore}
                      name="camBefore"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">CPU điện thoại</p>
                  <p>
                    <input
                      value={cpu}
                      name="cpu"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Hệ điều hành</p>
                  <p>
                    <input
                      value={gpu}
                      name="gpu"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                </div>
                <div className="col-main-product">
                  <p className="name-product-edit">Giá Sản Phẩm (vnd)</p>
                  <p>
                    <input
                      value={price}
                      name="price"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Giá sale (%)</p>
                  <p>
                    <input
                      value={priceSale}
                      name="priceSale"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Đánh giá sản phẩm</p>
                  <p>
                    <Rating
                      name="star"
                      mb={3}
                      className="input-product-edit"
                      value={parseInt(star, 10)}
                      onChange={this.onChange}
                    />
                  </p>
                  <p className="name-product-edit">Hiện/Ẩn sản phẩm</p>
                  <p>
                    <Switch
                      checked={statusProduct}
                      onChange={this.onChangeSwitch}
                      name="statusProduct"
                    />
                  </p>
                  <p className="name-product-edit">Hiện/Ẩn Số lượng</p>
                  <p>
                    <Switch
                      checked={statusQuantity}
                      onChange={this.onChangeSwitch}
                      name="statusQuantity"
                    />
                  </p>
                  <p hidden className="name-product-edit">
                    Ảnh sản phẩm 3
                  </p>
                  <p hidden>
                    <input
                      value={images3}
                      name="images3"
                      onChange={this.onChange}
                      className="input-product-edit"
                      type="text"
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p hidden className="name-product-edit">
                    Ảnh sản phẩm 4
                  </p>
                  <p hidden>
                    <input
                      value={images4}
                      name="images4"
                      onChange={this.onChange}
                      className="input-product-edit"
                      type="text"
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Số lượng</p>
                  <p>
                    <input
                      value={quantity}
                      name="quantity"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Ram main sản phẩm</p>
                  <p>
                    <input
                      value={ram}
                      name="ram"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                  <p className="name-product-edit">Rom main sản phẩm</p>
                  <p>
                    <input
                      value={rom}
                      name="rom"
                      className="input-product-edit"
                      type="text"
                      onChange={this.onChange}
                      alt=""
                      placeholder="Nhập để chỉnh sửa..."
                    />
                  </p>
                </div>
              </div>
              <div className="row-footer-editor">
                <p className="name-product-edit-ckeditor">Mô tả sản phẩm</p>
                <p>
                  <textarea
                    value={description}
                    placeholder="Mô tả..."
                    name="description"
                    onChange={this.onChange}
                    id="editor"
                    className="input-product-edit-textarea"
                  />
                  {/* <Editor
                                                className="input-product-edit-textarea"
                                                wrapperClassName="wrapper-class"
                                                editorClassName="editor-class"
                                                toolbarClassName="toolbar-class"
                                                onEditorStateChange={this.onEditorStateChange}
                                                editorState={description}
                                            /> */}
                </p>
              </div>
              <div className="row-footer">
                <p>
                  <input type="hidden" />
                </p>
                <p>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className="sb-form-button"
                  >
                    Lưu dữ liệu
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </form>
        <form onSubmit={this.onSubmitImages}>
          <div className="main-content-table">
            <p className="menu-table-main">
              <i className="far fa-calendar-alt" />
               ImagesProduct
            </p>
            <div className="product-edit">
              <p className="name-product-edit">Ảnh sản phẩm 1</p>
              <p>
                <input
                  name="images1"
                  onChange={this.onChangeImages}
                  className="input-product-edit"
                  type="file"
                  alt=""
                  placeholder="Nhập để chỉnh sửa..."
                />
                <img
                  src={images1}
                  alt={images1}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                />
              </p>
              <p className="name-product-edit">Ảnh sản phẩm 2</p>
              <p>
                <input
                  name="images2"
                  onChange={this.onChangeImages2}
                  className="input-product-edit"
                  type="file"
                  alt=""
                  placeholder="Nhập để chỉnh sửa..."
                />
                <img
                  src={images2}
                  alt={images2}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                />
              </p>
              <div className="row-footer">
                <p>
                  <input type="hidden" />
                </p>
                <p>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className="sb-form-button"
                  >
                    Lưu dữ liệu
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
  onChangeImages = (e) => {
    if (e.target.files[0]) {
      const images1 = e.target.files[0];
      this.setState({
        images1: images1,
      });
    }
  };
  onChangeImages2 = (e) => {
    if (e.target.files[0]) {
      const images2 = e.target.files[0];
      this.setState({
        images2: images2,
      });
    }
  };
}
export default productForm;
