import React, { Component } from 'react';
import styled from 'styled-components';
import { Title, Button } from './Util';

const StyledQuestion = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

class Question extends Component {
  render() {
    const { question, answers, setAnswer } = this.props;
    return (
      <StyledQuestion>
        <Title>{question}</Title>
        {
          answers.map(({text, house}, i) =>
            <Button key={i} onClick={() => setAnswer(house)}>{text}</Button>)
        }
      </StyledQuestion>
    );
  }
}

export default Question;
