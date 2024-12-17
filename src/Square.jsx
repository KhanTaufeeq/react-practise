import React, { useState } from 'react';

export function Square(props) {
  return (
    <>
      <button className="square" onClick={props.onSquareClick}>{props.value}</button>
    </>
  )
}



//Each Square has its own state: the value stored in each Square is completely independent of the others.
//When you call a set function in a component, React automatically updates the child components inside too.