import React from 'react';
import Cell from './Cell';

const Board = (props) => {
  return (
    <React.Fragment>
      <div>
        <Cell id='0' value={props.cellData[0]} />
        <Cell id='1' value={props.cellData[1]} />
        <Cell id='2' value={props.cellData[2]} />
      </div>
      <div>
        <Cell id='3' value={props.cellData[3]} />
        <Cell id='4' value={props.cellData[4]} />
        <Cell id='5' value={props.cellData[5]} />
      </div>
      <div>
        <Cell id='6' value={props.cellData[6]} />
        <Cell id='7' value={props.cellData[7]} />
        <Cell id='8' value={props.cellData[8]} />
      </div>
    </React.Fragment>
  )
}

export default Board;
