import React from 'react';

const Team = (props) => {
    const team = props.team;

    const totalBudget = team.reduce((total, team) => total + team.salary, 0);
    return (
        <div>
            <div className="text-center">
                <h2>My Team</h2>
                <h6>Team Members: {team.length}</h6>
                <p>Total Budget: {totalBudget}</p>
            </div>
            
            <div className="team-section">
                <br></br>
                <h5 className="mx-4">Team Members List:</h5>
                <ul>
                    {
                        team.map(player => <li>
                                                <div className="p-3 bg-color mb-3">
                                                    <h4>{player.name}</h4>
                                                    <h6>{player.country}</h6>
                                                    <h6>Salary: {player.salary} /-</h6>
                                                    <p><span>Age: {player.age}</span></p>
                                                </div>
                                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Team;