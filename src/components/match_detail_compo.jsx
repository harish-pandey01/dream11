import React from "react";
import { useParams } from "react-router";
import matchdetail from "../asset/data/matchlist.json";
import Match from "./match";
import PlayerList from "./player_compo";
import "../asset/css/player_compo.css";
import Created_team_compo from './created_team'


export default function Match_detail_compo() {
  const id = useParams()["id"];
  const match = matchdetail["matches"][id - 1];

  return (
    <div className="Join-match-page">
      <div className="hct_title">
        <span>
          Join the match between {match["team1"]} and {match["team2"]}
        </span>
      </div>
      <Match matchid={id} />
      <div className="match-teams">
        <div className="players-acc-team">
          <div className="pct-head">
            <img src={match["flag1"]} alt="" />
            <span>Player's of team {match["team1"]}</span>
          </div>
          <PlayerList team={match["team1"]} />
        </div>
        <div className="players-acc-team">
          <div className="pct-head">
            <img src={match["flag2"]} alt="" />
            <span>Player's of team {match["team2"]}</span>
          </div>
          <PlayerList team={match["team2"]} />
        </div>
      </div>
      <Created_team_compo />
    </div>
  );
}
