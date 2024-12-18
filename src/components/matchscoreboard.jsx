import React from 'react'

export default function Matchscoreboard(props) {
    const match = props.match
    console.log(match)
  return (
    <div className="match-score-bord">
        
        <div className="match-card">
          <div className="team team-left">
            <img src={match["flag1"]} alt="India Flag" className="flag" />
            <h2>{match["team1"]}</h2>
          </div>
          <div className="match-center">
            <div className="vs">VS</div>
            <div className="details">
              <p>Date: {match["date"]}</p>
              <p>Venue: {match["venue"]}</p>
              <p>Time: 7:00 PM</p>
            </div>
          </div>
          <div className="team team-right">
            <img src={match["flag2"]} alt="England Flag" className="flag" />
            <h2>{match["team2"]}</h2>
          </div>
        </div>
        <div className="match-score-detail">
          <div className="details">
            <p>current score: 150</p>
            <p>balls: 120</p>
            <p>Total over : 20</p>
            <p>Target score: 200</p>
            <p>Left balls: 40</p>
            <p>Left over: 6.4</p>
          </div>
          <div className="details">
            <p>current score: 200</p>
            <p>balls: 120</p>
            <p>Total over : 20</p>
            <p>Target score: 200</p>
            <p>Left balls: 0</p>
            <p>Left over: 0</p>
          </div>
        </div>
      </div>
  )
}
