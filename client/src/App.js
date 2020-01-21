import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import OddsSelect from "./components/OddsSelect";
import Mlb from "./components/Mlb";
import Nba from "./components/Nba";
import Nhl from "./components/Nhl";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Lander from "./components/Lander"

// import NoMatch from "./components/NoMatch";

class App extends Component {
  state = {
    data: null
  };

//   componentDidMount() {
//     // Call our fetch function below once the component mounts
//   this.callBackendAPI()
//     .then(res => this.setState({ data: res.express }))
//     .catch(err => console.log(err));
// }

// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
// callBackendAPI = async () => {
//   const response = await fetch('/express_backend');
//   const body = await response.json();

//   if (response.status !== 200) {
//     throw Error(body.message) 
//   }
//   return body;
// };


  render() {
    return (
    <div className="App">
    <Router>
    <Route path="/" component={Header} />
    <Route exact path="/" component={Lander} />
    <Route path="/" component={Footer} />
        {/* <Route component={NoMatch} /> */}
    </Router>
    </div>
    );
  }
}

export default App;
