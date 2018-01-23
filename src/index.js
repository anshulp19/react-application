import React from 'react';
import { render } from 'react-dom';
import Square from './src/Square';
import Board from './src/Board';

const game = {
  display: 'flex',
  flexDirection: 'row'
};

const gameInfo = {
  marginLeft: '20px'
};

class Game extends React.Component {
  render() {
    return (
      <div style={game}>
        <div className="game-board">
          <Board />
        </div>
        <div style={gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

render(
  <Game />,
  document.getElementById('root')
);
