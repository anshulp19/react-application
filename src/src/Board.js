import React from 'react';
import Square from './Square';

const status = {
  marginBottom: '10px'
};

const boardRow = {
  clear: 'both',
  content: "",
  display: 'table'
};

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const curr_status = 'Next player: X';

    return (
      <div>
        <div style={status}>{curr_status}</div>
        <div style={boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div style={boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div style={boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

module.exports = Board;
