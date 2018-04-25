import React from 'react';
import Board from '../components/Board';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWon: false,
      currentPlayer: this.props.players[0],
      cells: [] // initialise with this empty
    }
  }

  takeTurn(){
    console.log('cell clicked');
  }

  render(){
    return (
      <div className='game-container'>
        <Board cellData={this.state.cells} handleCellClick={this.takeTurn}/>
      </div>
    )
  }
}

export default Game;
