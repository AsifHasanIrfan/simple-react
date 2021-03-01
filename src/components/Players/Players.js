import { useState, useEffect } from 'react';
import playersData from '../../playersData/playersData.json';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './players.css';

const Players = () => {
    const players = playersData
    const [player, setplayer] = useState([])
    const [team, setTeam] = useState([])

    useEffect(() =>{
        setplayer(players)
    }, [])

    const addPlayer = (player) => {
        const newTeam = [...team, player]
        setTeam(newTeam)
    }

    return (
        <div className="container players-section mt-5">
            <div className="players">
            <h2 className ="text-center">Select Players For Your Team</h2>
                {
                    player.map(player => <Player player={player} key={player.id} addPlayer={addPlayer}></Player>)
                }
            </div>

            <div className="team">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Players;