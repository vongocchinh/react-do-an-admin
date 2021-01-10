import React, { Component } from "react";

export default class registerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      passWord: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    var { userEmail, passWord } = this.state;
    const user = {
      userEmail,
      passWord,
    };
    this.props.register(user);
    e.target.reset();
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="account-admin-form">
          <form onSubmit={this.onSubmit}>
            <p className="title-account-admin">UserEmail:</p>
            <input
              autoComplete="off"
              className="input-account-admin"
              required
              onChange={this.onChange}
              name="userEmail"
              minLength={6}
              type="text"
              placeholder="userMail... *"
            />
            <p className="title-account-admin">PassWord</p>
            <div className="layout-admin-from-input">
              <input
                autoComplete="off"
                onChange={this.onChange}
                name="passWord"
                className="layout-input-account-admin"
                placeholder="password... *"
                required
              />
              <input
                autoComplete="off"
                onChange={this.onChange}
                className="layout-input-account-admin"
                placeholder="confirm password ... *"
                required
              />
            </div>
            <p className="title-account-admin">Address</p>
            <input
              autoComplete="off"
              onChange={this.onChange}
              className="input-account-admin"
              placeholder="z-code... *"
            />
            <p className="title-account-admin">Phone</p>
            <input
              autoComplete="on"
              onChange={this.onChange}
              className="input-account-admin"
              placeholder="... *"
            />
            <div>
              <input
                className="input-button-submit"
                type="submit"
                value="Submit"
               
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
