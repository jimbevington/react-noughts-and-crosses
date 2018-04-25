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
    debugger;
    const currentCell = event.target.id;  // the clicked cell ID
    this.fillCell(currentCell)
    // checkWinner()
    this.checkWon()
  }

  fillCell(cellID){
    const updatedCells = this.state.cells;
    updatedCells[cellID] = this.state.currentPlayer;
    this.setState({cells: updatedCells})
  }

  checkWon(){
    if(this.state.isWon){
      console.log('the winner is' + this.state.currentPlayer);
    } else {
      this.changePlayer();
    }
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
