import React from 'react';

const Cell = (props) => {
  return (
    <p
      className='cell'
      onClick={props.handleClick}>
      {props.value}
    </p>
  )
}

export default Cell;
