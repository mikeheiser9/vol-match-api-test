import React from "react";
import "../Footer/Footer.css";
// import axios from "axios";


class Footer extends React.Component {

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className={"footer"}>
        <div className={"row"}>
          <div className={"col-xs-12 col-sm-12 col-md-12 -col-lg-12 col-xl-12"}>
            <h3 className="copyright-footer">© Sports.money {this.getYear()}</h3>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Footer;