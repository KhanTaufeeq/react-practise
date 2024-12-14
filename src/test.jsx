import React from 'react';
import { useState } from 'react';

function MyApp(props) {
  return (
    <>
      <MultipleButtons/>
      <br/>
      <br/>
      <MultipleButtons/>
    </>
  )
}

export const MultipleButtons = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Clicked me {count} times</button>
    </>
  )
}

export default MyApp;