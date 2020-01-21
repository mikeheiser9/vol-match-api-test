const db = require("../models");
const unirest = require('unirest');

module.exports = function (app) {

  app.get('/api/nba-odds', (req, res) => {
    unirest.get("https://therundown-therundown-v1.p.rapidapi.com/sports/4+1/events?include=all_periods%2C+scores%2C+and%2For+teams")
      .header("X-RapidAPI-Host", "therundown-therundown-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", "7a6d0035famshc427c8042d41874p1a01ccjsncbca3b256405")
      .end(function (result) {
        // console.log(result.status, result.headers, result.body);
        res.status(200).send(result);
      });
  });

  app.get('/api/mlb-odds', (req, res) => {
    unirest.get("https://therundown-therundown-v1.p.rapidapi.com/sports/3+1/events?include=all_periods%2C+scores%2C+and%2For+teams")
      .header("X-RapidAPI-Host", "therundown-therundown-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", "7a6d0035famshc427c8042d41874p1a01ccjsncbca3b256405")
      .end(function (result) {
        // console.log(result.status, result.headers, result.body);
        res.status(200).send(result);
      });
  });

  app.get('/api/nhl-odds', (req, res) => {
    unirest.get("https://therundown-therundown-v1.p.rapidapi.com/sports/6+1/events?include=all_periods%2C+scores%2C+and%2For+teams")
      .header("X-RapidAPI-Host", "therundown-therundown-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", "7a6d0035famshc427c8042d41874p1a01ccjsncbca3b256405")
      .end(function (result) {
        // console.log(result.status, result.headers, result.body);
        res.status(200).send(result);
      });
  });

};