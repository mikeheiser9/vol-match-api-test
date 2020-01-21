import React from "react";
import "../Lander/Lander.css";


class Lander extends React.Component {
    state = {
     data: null
    }


  render() {
    return (
    <div className={"lander-container"}>
     <div className={"text-container"}>
      <div className={"txt-column"}>
        <ul>
            <li>Live Market Odds from Vegas and Offshore</li>
            <li>Live Market Breakdown from Vegas' Top Sports Analysts</li>
            <li>Exclusive Selections from the Industry's Most Respected Handicappers</li>
            <li>Exclusive Handicapping Library and Research Department</li>
        </ul>
      </div>
     </div>
     <div className={"video-container"}>
      <iframe src="https://www.youtube-nocookie.com/embed/_Dgs8R3isnE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    </div>
    );
  }
}

export default Lander