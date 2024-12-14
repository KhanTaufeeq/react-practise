import React from 'react';

function MyApp() {
  const handleClick = () => {
    alert('You clicked me!')
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

export default MyApp;