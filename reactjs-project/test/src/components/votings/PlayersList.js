import React from "react";
import PlayerDetails from "./PlayerDetailes";
import Players from "./Players";
import './styles.css'

class Component extends React.Component {

  state = {
  players: []
  };
    
  componentDidMount() {
    this.setState({
      players: PlayerDetails
    }); 
  }

render() {
    console.log("players",this.state.players)
    //sort country with highest votes
    // var sortPlayers = this.state.players.sort((a, b) => {
    //   return b.votes - a.votes;
    // });
 
      
    const players = this.state.players.map(player => (
      
      <Players 
        key={player.id}
        id={player.id}
        name={player.name}
        votes={player.votes}
        imageUrl={player.imageUrl}
        votePlayer={player.id}
      />
      
      
    ));
  return (
    <div className="mt-5">
      <h1>International voting day</h1> 
    
    <div className="ui divided unstackable items main">
      {players}
    </div>
    </div>
     
  )}
}

export default Component;
