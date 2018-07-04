import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, Button } from './Util';

const StyledFinal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledHouse = styled(Title)`
  font-size: 4em;
`;

class Final extends Component {
  render() {
    return (
      <StyledFinal>
        <span>You've been sorted into...</span>
        <StyledHouse>{this.props.house}</StyledHouse>
        <Button onClick={this.props.startOver}>Start over</Button>
      </StyledFinal>
    );
  }
}

export default Final;
