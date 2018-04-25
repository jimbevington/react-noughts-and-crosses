import React from 'react';
import Board from '../components/Board';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWon: false,
      currentPlayer: props.players[0],
      cells: [] // initialise with this empty
    }
    this.takeTurn = this.takeTurn.bind(this);
  }

  takeTurn(event){
    const currentCell = event.target.id;  // the clicked cell ID
    this.fillCell(currentCell)
    this.checkWinner();
    // if no one has won, change the Player
    if(!this.state.isWon){
      this.changePlayer();
    }
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

    for (let row of rows){
      if (cells[row[0]] && cells[row[0]] === cells[row[1]] && cells[row[0]] === cells[row[2]]){
        this.setState({isWon: true}, this.declareWinner());
      }
    }
  }

  declareWinner(){
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

      </div>
    )
  }
}

export default Game;
