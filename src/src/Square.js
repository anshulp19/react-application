import React from 'react';

const square = {
  background: '#fff',
  border: '1px solid #999',
  float: 'left',
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '34px',
  height: '34px',
  marginRight: '-1px',
  marginTop: '-1px',
  padding: 0,
  textAlign: 'center',
  width: '34px'
};

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button style={square} 
        onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  };
    
}

module.exports = Square;
