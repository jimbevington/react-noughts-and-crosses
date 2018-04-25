import React from 'react';

const Cell = (props) => {
  return (
    <div
      id={props.id}
      className='cell'
      onClick={props.handleClick}>
      {props.value}
    </div>
  )
}

export default Cell;
