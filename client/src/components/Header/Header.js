import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";


class Header extends React.Component {
  
  render() {
    return (
      <div className={"header"}>
      <div className={"row"}>
      <div className={"col-xs-12 col-s-12 col-md-12 col-lg-12"}>
        <Link to="/">
          <h1 className={"header-logo"}><span className={"sports-head"}>Volunteer Match</span></h1>
        </Link>
      </div>
      </div>
      </div>
    );
  }
  
}

export default Header;