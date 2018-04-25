import React from 'react';
import Cell from './Cell';

const Board = (props) => {

  return (
    <React.Fragment>
      <div className='row'>
        <Cell
          id='0'
          value={props.cellData[0]}
          handleClick={props.handleCellClick}/>
        <Cell
          id='1'
          value={props.cellData[1]}
          handleClick={props.handleCellClick}/>
        <Cell
          id='2'
          value={props.cellData[2]}
          handleClick={props.handleCellClick}/>
      </div>
      <div className='row'>
        <Cell
          id='3'
          value={props.cellData[3]}
          handleClick={props.handleCellClick}/>
        <Cell
          id='4'
          value={props.cellData[4]}
          handleClick={props.handleCellClick}/>
        <Cell id='5' value={props.cellData[5]} />
      </div>
      <div className='row'>
        <Cell
          id='6'
          value={props.cellData[6]}
          handleClick={props.handleCellClick}/>
        <Cell
          id='7'
          value={props.cellData[7]}
          handleClick={props.handleCellClick}/>
        <Cell
          id='8'
          value={props.cellData[8]}
          handleClick={props.handleCellClick}/>
      </div>
    </React.Fragment>
  )
}

export default Board;
