import React, { Component } from "react";
import RegisterForm from "./registerForm";

export default class register extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="">
          <p className="table-text">
            <i className="far fa-calendar-alt" />
             UserAdmin
          </p>
          <div className="hidden-table">
            <RegisterForm register={this.props.register} />
          </div>
        </div>
      </div>
    );
  }
}
