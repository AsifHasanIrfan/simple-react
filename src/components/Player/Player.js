import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './player.css'

const Player = (props) => {

    const {name, img, country,born, salary, age, teams, role, bowlingStyle, battingStyle} = props.player;

    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="players-info">
            <div className="player-img">
                <img src={img} alt="..."/>
            </div>

            <div className="p-3 bg-color">
                <h4>{name}</h4>
                <h6>{country}</h6>
                <h6>Salary: {salary} /-</h6>
                <br></br>
                <div className="info-section">
                    <p><span>Born: </span><small>{born}</small></p>
                    <p><span>Age: </span><small>{age}</small></p>
                    <p><span>Major Teams: </span><small>{teams}</small></p>
                    <p><span>Role: </span><small>{role}</small></p>
                    <p><span>Bowling Style: </span><small>{bowlingStyle}</small></p>
                    <p><span>Batting Style: </span><small>{battingStyle}</small></p>
                </div>
                <br></br>
                <button className="add-btn" disabled = {isClicked} onClick={() => {props.addPlayer(props.player); setIsClicked(true)}}><FontAwesomeIcon icon={faPlus} /> {isClicked ? "✓ Player added to team" : "Add Player"}</button>
            </div>

        </div>
    );
};

export default Player;