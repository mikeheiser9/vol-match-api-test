import React from "react";
import "../Home/Home.css";
// import axios from "axios";


class Home extends React.Component {

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className={"col-xs-12 col-s-12 col-md-12 col-lg-12 col-xl-12"}>
        <div className={"home-cont"}>
            <h1>Click a Link On Odds Above to Display Live Odds</h1>
        </div>
      </div>
    );
  }
  
}

export default Home;