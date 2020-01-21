import React from "react";
import "../Nhl/Nhl.css";
import axios from "axios";
import Moment from 'react-moment';
import 'moment-timezone';



class Nhl extends React.Component {
  constructor(props) {
    super(props)
    this.state= {value: "moneyline",}
    this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      this.getNhlData();
    }

    getNhlData = () => {
      axios.get("/api/nhl-odds").then((res) => {
        let arrayOfEvents = []
        const parsed = JSON.parse(JSON.stringify(res)).data.body.events
        console.log("parsed data", parsed);
        for (let i = 0; i < parsed.length; i++) {
          const teamObject = {};
          const linesObj = parsed[i].lines;
          const linesArr = Object.values(linesObj);
          const testVal = 0;
          const dateParse = parsed[i].event_date;
          const dateToFormat = new Date(dateParse);
          // GETTING EVENT DATE FOR GAME
           teamObject.date = {
            event_date: <Moment format="MMM D, h:mm A" date={dateToFormat} />
          }
          teamObject.test = {
            testValue: testVal
          }
          for (let j = 0; j < linesArr.length; j++) {
            teamObject.lines = [
              {
               affiliate: linesArr[0].affiliate.affiliate_name,
               moneyline_away: linesArr[0].moneyline.moneyline_away,
               moneyline_home: linesArr[0].moneyline.moneyline_home,
               spread_away: linesArr[0].spread.point_spread_away,
               spread_home: linesArr[0].spread.point_spread_home,
               total: linesArr[0].total.total_over
              },
              {
                affiliate: linesArr[1].affiliate.affiliate_name,
                moneyline_away: linesArr[1].moneyline.moneyline_away,
                moneyline_home: linesArr[1].moneyline.moneyline_home,
                spread_away: linesArr[1].spread.point_spread_away,
                spread_home: linesArr[1].spread.point_spread_home,
                total: linesArr[1].total.total_over
              },
              {
                affiliate: linesArr[4].affiliate.affiliate_name,
                moneyline_away: linesArr[4].moneyline.moneyline_away,
                moneyline_home: linesArr[4].moneyline.moneyline_home,
                spread_away: linesArr[4].spread.point_spread_away,
                spread_home: linesArr[4].spread.point_spread_home,
                total: linesArr[4].total.total_over
              },
          ]
            for (let k = 0; k < parsed[i].teams.length; k++) {
            const isAway = parsed[i].teams[k].is_away;
            const eachTeam = parsed[i].teams[k].name;  
            // PUTTING TEAMS IN OBJ
            isAway ? teamObject.away = {away_team: eachTeam} : teamObject.home = {home_team: eachTeam}
          }
        }
          arrayOfEvents.push(teamObject)
        }
        this.setState({arrayOfEvents});
      });
    }

    handleChange(event) {
      this.setState({value: event.target.value});
      event.preventDefault();
    }

    componentDidUpdate(prevProps, prevState) {
      const prevStateVals = []; 
      console.log("current state", this.state.arrayOfEvents);
      console.log("prev state", prevState);
      if (this.state.arrayOfEvents === prevState.arrayOfEvents) {
        console.log("Everthing is the same") 
      } else {
        this.state.arrayOfEvents.map((eachList, i) => {
          // console.log("each list", eachList);
          const newLines = eachList.lines;
          // console.log("new lines", newLines);
          // const currentStateVals = liness.filter(function(liness)
           prevState.arrayOfEvents ?  prevState.arrayOfEvents.map((prevList, k) => {
            //  console.log("prev state inner", prevState);
            // console.log("prev list", prevList);
            const prevLines= prevList.lines;
            // console.log("prevLines", prevLines)
            // console.log("new lines inner", newLines);
            // newLines[i].values === prevLines[k].values ? console.log("EVERYTHING SAME") : console.log("SHIT CHANGED YO")
            
            
          }) : console.log("no prev state yet")

        })
      }

      
    }

  render() {
    console.log("in render",this.state);
    return (
      <div className={"nhl-container"}>
        <div className={"row"}>
          <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
            <div className={"grid-container"}>
            <div className={"row league-row"}>
                <div className={"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"}>
                  <div className={"league-info"}>
                      <img className={"nhl-league-logo"} src={"http://thekingmaker.me/wp-content/uploads/2016/01/National-Hockey-League.png"} alt={"nhl_logo"}></img>
              
                  </div>
                </div>
                <div className={"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"}>
                <a className={"nhlRefresh"} href='javascript:void(0)' onClick={this.getNhlData}><img className={"nhlRefresh"} src={"../../../../images/refresh.png"} alt={"refresh"}></img></a>
                <div className={"oddSelect-container"}>
      <select className={"selector-dropdown"} id={"nhlSelectDD"} value={this.state.value} onChange={this.handleChange} >
        <option selected value="moneyline">Moneyline</option>
        <option value="spread">Spread</option>
        <option value="total">Total</option>
        {console.log("value state change MLB", this.state)}
        {/* {this.props = this.state.value} */}
        {/* {console.log("props", this.props)} */}
      </select>
      </div>
                </div>
            </div>
              <table className={"table table-bordered"}>
                  <thead  className={"headers-row"}>
                    <tr>
                  <th>
                  <span className={"team-info"}>Time</span>
                  </th>
                  <th>
                    <span className={"team-info"}>Teams</span>
                  </th>
                    <th className={"book-headers"} id={"fiveDimesHead"}>
                    <img src={"../../../../images/5dimeslogo.png"} className={"bookie-logos"} alt={"5dimes-Logo"}></img>
                    </th>
                    <th className={"book-headers"} id={"pinnacleHead"}>
                    <img src={"../../../../images/pinnacle-logo.png"} className={"bookie-logos"} alt={"Pinnacle-Logo"}></img>
                    </th>
                    <th className={"book-headers"} id={"bookmakerHead"}>
                    <img src={"../../../../images/logo-bookmaker.png"} className={"bookie-logos"} alt={"Bookmaker-Logo"}></img>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                        this.state.arrayOfEvents === undefined || this.state.arrayOfEvents.length ===0 ?
                          <tr  className={"loader"}><td>Loading</td></tr> : this.state.value === "moneyline" && this.state.arrayOfEvents.map((index, i) => {
                            return [
                            <tr key={i}>
                            <td className={"live-time"}>{index.date.event_date}</td>
                            <td className={"live-teams"}><span className={"marker"}>Home: </span>{index.home.home_team}<br></br><span className={"marker"}>Away: </span>{index.away.away_team}</td>
                              <td className={"live-open-line"}><span className={"marker"}>Moneyline-Home: </span>{index.lines[0].moneyline_home}<br></br><span className={"marker"}>Moneyline-Away: </span>{index.lines[0].moneyline_away}
                              </td>
                              <td className={"live-open-line"}><span className={"marker"}>Moneyline-Home: </span>{index.lines[1].moneyline_home}<br></br><span className={"marker"}>Moneyline-Away: </span>{index.lines[1].moneyline_away}
                              </td>
                              <td className={"live-open-line"}><span className={"marker"}>Moneyline-Home: </span>{index.lines[2].moneyline_home}<br></br><span className={"marker"}>Moneyline-Away: </span>{index.lines[2].moneyline_away}
                              </td>                          
                            </tr>  
                            ]
                          })
                        }

                      {
                        this.state.arrayOfEvents === undefined || this.state.arrayOfEvents.length ===0 ?
                          <tr  className={"loader"}><td>Loading</td></tr> : this.state.value === "spread" && this.state.arrayOfEvents.map((index, j) => {
                            return [
                              <tr key={j}>
                              <td className={"live-time"}>{index.date.event_date}</td>
                              <td className={"live-teams"}><span className={"marker"}>Home: </span>{index.home.home_team}<br></br><span className={"marker"}>Away: </span>{index.away.away_team}</td>
                                <td className={"live-open-line"}><span className={"marker"}>Spread Home: </span>{index.lines[0].spread_home}<br></br><span className={"marker"}>Spread Away: </span>{index.lines[0].spread_away}
                                </td>
                                <td className={"live-open-line"}><span className={"marker"}>Spread Home: </span>{index.lines[1].spread_home}<br></br><span className={"marker"}>Spread Away: </span>{index.lines[1].spread_away}
                                </td>
                                <td className={"live-open-line"}><span className={"marker"}>Spread Home: </span>{index.lines[2].spread_home}<br></br><span className={"marker"}>Spread Away: </span>{index.lines[2].spread_away}
                                </td>                          
                              </tr>  
                              ]
                          })
                        }

                      {
                        this.state.arrayOfEvents === undefined || this.state.arrayOfEvents.length ===0 ?
                          <tr  className={"loader"}><td>Loading</td></tr> : this.state.value === "total" && this.state.arrayOfEvents.map((index, k) => {
                            return [
                            <tr key={k}>
                            <td className={"live-time"}>{index.date.event_date}</td>
                            <td className={"live-teams"}><span className={"marker"}>Home: </span>{index.home.home_team}<br></br><span className={"marker"}>Away: </span>{index.away.away_team}</td>
                              <td className={"live-open-line"}><span className={"marker"}>Total: </span>{index.lines[0].total}
                              </td>
                              <td className={"live-open-line"}><span className={"marker"}>Total: </span>{index.lines[1].total}
                              </td>
                              <td className={"live-open-line"}><span className={"marker"}>Total: </span>{index.lines[2].total}
                              </td>                          
                            </tr>  
                            ]
                          })
                        }
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nhl