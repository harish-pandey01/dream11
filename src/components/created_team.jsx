import React , {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../asset/css/created_team.css'

export default function Created_team_compo() {
    const [players, setplayers] = useState()
    const playersl = useSelector((state)=> state.myteam.players)
    useEffect(() => {
        setplayers(playersl)
    
    }, [playersl])
    


  return (
    <div className="created_team">
        <div className="ct-head">
            <button>
                <Link to='/joincontest/1'>Play match with your team</Link>
            </button>
        </div>
        <div className="our-team-players">
        {
           players?  players.map((player)=>{
                return(
                    
            <div className="otp-compo">
                <img src={player[2]} alt="" />
                <h4>{player[1]}</h4>
                <p>{player[0]}</p>
            
        </div>
                )
            }) : ""
        }
        </div>
    </div>
  )
}
