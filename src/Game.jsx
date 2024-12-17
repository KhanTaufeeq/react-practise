import React from 'react';
import { Board } from './TicTacToe';
import { Square } from './Square';

function Game() {
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <ol>{}</ol>
        </div>
      </div>
    </>
  )
}

export default Game;

// Note that you are removing the export default keywords before the function Board() { declaration and adding them before the function Game() { declaration. This tells your index.js file to use the Game component as the top-level component instead of your Board component. The additional divs returned by the Game component are making room for the game information you’ll add to the board later.