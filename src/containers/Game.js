import React from 'react';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWon: false,
      currentPlayer: this.props.players[0],
      cells: {} // initialise with this empty
    }
  }

  render(){
    return <h1>This is the Game</h1>
  }
}

export default Game;
