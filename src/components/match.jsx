import React from "react";
import { Link } from "react-router-dom";

// import css file
import "../asset/css/match.css";

// import images

import matchdetial from '../asset/data/matchlist.json'

export default function Match(props) {

  const match = matchdetial['matches'][props.matchid-1]
  
  return (
    <div>
      <div className="match-card">
        
        <div className="team team-left">
          <img
            src={match["flag1"]}
            alt="India Flag"
            className="flag"
          />
          <h2>{match['team1']}</h2>
        </div>
        <div className="match-center">
        <div className="vs">VS</div>
        <div className="details">
          <p>Date: {match['date']}</p>
          <p>Venue: {match['venue']}</p>
          <p>Time: 7:00 PM</p>
        </div>
        </div>
        <div className="team team-right">
          <img
            src={match["flag2"]}
            alt="England Flag"
            className="flag"
          />
          <h2>{match['team2']}</h2>
        </div>
        {props.join? <div className="details">
          <button>
            <Link to={"match/"+props.matchid}>Join Contest</Link>
          </button>
        </div> : ""}
      </div>
    </div>
  );
}
