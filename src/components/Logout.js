import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Logout.css";
import axios from "axios";

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="modal"
        style={{ display: this.props.open ? "block" : "none" }}
      >
        {this.props.open ? (
          <div>
            <h1 className="modal_0">로그아웃 하시겠습니까?</h1>
            <button className="modal_1" onClick={this.props.handleLogout}>
              yes
            </button>
            <button
              className="modal_2"
              onClick={this.props.handleLogoutModalClose}
            >
              No
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Logout);
