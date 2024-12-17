import React, { useState } from 'react';
import Square from './Square';

export function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }


  function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares); 
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <h1 className="heading">tic-tac-toe game</h1>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick = {() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick = {() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick = {() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick = {() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick = {() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick = {() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick = {() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick = {() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick = {() => handleClick(8)}/>
      </div>
    </>
  )
}


// The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.

// A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display.

// Since state is private to a component that defines it, you cannot update the Board’s state directly from Square.

// JavaScript supports closures which means an inner function (e.g. handleClick) has access to variables and functions defined in an outer function (e.g. Board). The handleClick function can read the squares state and call the setSquares method because they are both defined inside of the Board function.

// When you were passing onSquareClick={handleClick}, you were passing the handleClick function down as a prop. You were not calling it! But now you are calling that function right away—notice the parentheses in handleClick(0)—and that’s why it runs too early. You don’t want to call handleClick until the user clicks!