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
          <div className="modal_0">
            <div className="modalTitle">are you sure you want to do that</div>
            <div className="TitleLine"></div>
            <div className="modaldeExplanation">
              If you click Yes, you are logged out, and if you click No to go
              back.
            </div>
            <button className="modal_1" onClick={this.props.handleLogout}>
              Yes
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
