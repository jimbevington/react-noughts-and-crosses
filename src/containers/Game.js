import React from 'react';
import Board from '../components/Board';
import Player from '../components/Player';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWon: false,
      currentPlayer: props.players[0],
      cells: [], // initialise with this empty
      displayWinner: 'hidden'
    }
    this.takeTurn = this.takeTurn.bind(this);
  }

  takeTurn(event){
    // stop Turn if Game is Won
    if(this.state.isWon){
      return;
    }

    const currentCell = event.target.id;  // the clicked cell ID
    this.fillCell(currentCell)
    this.checkWinner();
  }

  fillCell(cellID){
    const updatedCells = this.state.cells;
    updatedCells[cellID] = this.state.currentPlayer;
    this.setState({cells: updatedCells})
  }

  checkWinner(){
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const cells = this.state.cells;   
    let won = false   //  local 'won' var to decide if player changes

    for (let row of rows){
      if (cells[row[0]] && cells[row[0]] === cells[row[1]] && cells[row[0]] === cells[row[2]]){
        won = true  // toggle local 'won' to prevent player change
        this.setState({isWon: true}, this.declareWinner);
      }
    }

    // Change the Player if the Game hasn't been won
    if (!won){
      this.changePlayer();
    }
  }

  declareWinner(){
    this.setState({displayWinner: 'winnerVisible'});
    console.log('the winner is ' + this.state.currentPlayer);
  }

  changePlayer(){
    this.setState(prevState => {
      if(prevState.currentPlayer === 'X'){
        return {currentPlayer: 'O'};
      } else {
        return {currentPlayer: 'X'};
      }
    })
  }

  render(){
    return (
      <div className='game-container'>
        <Board cellData={this.state.cells} handleCellClick={this.takeTurn}/>

        {/* THESE SHOULD HIGHLIGHT BASED ON CURRENT PLAYER */}
        <div className='player-labels'>
          <Player player={this.props.players[0]}/>
          <Player player={this.props.players[1]}/>
        </div>

        {/* this is not updating as i'd want */}
        <h1 className={this.state.displayWinner}>The winner is {this.state.currentPlayer}!</h1>
      </div>
    )
  }
}

export default Game;
