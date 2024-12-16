import React, { useState } from 'react';

function Square() {

  const [value, setValue] = useState(null);

  function handleClick () {
    setValue('X')
  }
  return (
    <>
      <button className="square" onClick={handleClick}>{value}</button>
    </>
  )
}

export default Square;

//Each Square has its own state: the value stored in each Square is completely independent of the others.
//When you call a set function in a component, React automatically updates the child components inside too.