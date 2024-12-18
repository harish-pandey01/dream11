import React from "react";
import { useParams } from "react-router";
import matchdetail from "../asset/data/matchlist.json";
import "../asset/css/joincontest.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Matchscoreboard from "../components/matchscoreboard";

export default function Joincontest() {
  const id = useParams()["id"];
  const matchd = matchdetail["matches"][id - 1];
  const playerinfo = useSelector((state) => state.myteam.players);
  return (
    <div className="joincontest">
      <div className="ct-head w100">
        <span>Match contest score board</span>
      </div>
      <Matchscoreboard match={matchd} />

      <div className="players-score">
        <div className="player-list">
          {playerinfo.map((player) => {
            return (
              <div className="player-compo" key={player[0]}>
                <div className="pc-left">
                  <div className="player-img">
                    <img src={player[2]} alt="" />
                  </div>
                  <div className="player-detail">
                    <h4>{player[0]}</h4>
                    <p>{player[1]}</p>
                  </div>
                </div>
                <div className="pc-right">
                  <div className=" pd-center player-detail">
                    <h4>Run</h4>
                    <p>40</p>
                  </div>
                  <div className="player-detail pd-center">
                    <h4>Ball</h4>
                    <p>38</p>
                  </div>
                  <div className="player-detail pd-center">
                    <h4>Over</h4>
                    <p>6.2</p>
                  </div>
                  <div className="player-detail pd-center">
                    <h4>Run Rate</h4>
                    <p>1.05</p>
                  </div>
                  <div className="player-detail pd-center ">
                    <h4>G11 Point</h4>
                    <p>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCoins}
                        className="golden"
                        swapOpacity
                      />{" "}
                      150
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total-score"></div>
    </div>
  );
}
