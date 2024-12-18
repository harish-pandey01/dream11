import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faMinus } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import "../asset/css/playerlist.css";
import playersinfo from '../asset/data/playerinfo.json'
import { useSelector, useDispatch } from 'react-redux'
import {addplayer , removeplayer} from '../store/slice'

export default function PlayerList(props) {
  const [rmindex, setrmindex] = useState()
  const playerinfo = playersinfo[props.team]['players']
  const players = useSelector((state)=> state.myteam.players)
  const dispatch = useDispatch()

  const checkonteam = (pname)=>{
    let i = 0
    for(const p of players){
      i = i+1
      if(p[0] == pname){
        console.log(p[0])
        setrmindex(i)
        return true
        break
      }
    }
  }
  checkonteam()

  return (
    <div>
    <div className="player-list">
      {playerinfo.map((player)=>{
        return(
        <div className="player-compo" key={player['name']}>
        <div className="pc-left">
          <div className="player-img">
            <img src={player['img']} alt="" />
          </div>
          <div className="player-detail">
            <h4>{player['name']}</h4>
            <p>{player['role']}</p>
          </div>
        </div>
        <div className="pc-right">
          <div className="add-player">
            <button onClick={()=>{
              const data = [player['name'], player['role'], player['img']]
              dispatch(addplayer(data))
            }}>
              <FontAwesomeIcon icon={faPlus} />
            </button> 
          </div>
        </div>
      </div>)
      })}
    </div>
    </div>
  );
}

