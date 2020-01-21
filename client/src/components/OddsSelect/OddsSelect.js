import React from "react";
import "./OddsSelect.css";
import axios from "axios";


class OddsSelect extends React.Component {
  constructor(props) {
    super(props)
    console.log("props",this.props);
    this.state= {value: "moneyline"}
    this.handleChange = this.handleChange.bind(this);
}


handleChange(event) {
  this.setState({value: event.target.value});
  event.preventDefault();
}

  render() {
    return (
      <div className={"oddSelect-container"}>
      <select className={"selector-dropdown"} value={this.state.value} onChange={this.handleChange} >
        <option selected value="moneyline">Moneyline</option>
        <option value="spread">Spread</option>
        <option value="total">Total</option>
        {console.log("value state change", this.state)}
        {/* {this.props = this.state.value} */}
        {/* {console.log("props", this.props)} */}
      </select>
      </div>
    );
  }
}

export default OddsSelect