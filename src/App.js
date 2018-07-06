import React, { Component } from 'react';
import styled from 'styled-components';
import { ArrowLeft, Reload } from 'react-bytesize-icons';
import { shuffle } from './Util';
import Final from './Final';
import Question from './Question';

const StyledApp = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
`;

const BackWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ReloadWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ProgressWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const House = {
  GRYFFINDOR: "Gryffindor",
  HUFFLEPUFF: "Hufflepuff",
  RAVENCLAW: "Ravenclaw",
  SLYTHERIN: "Slytherin"
}

function initialState() {
  const quiz = [
    {
      question: "How would you like to be known in history?",
      answers: [
        { text: "The Good", house: House.GRYFFINDOR },
        { text: "The Great", house: House.HUFFLEPUFF },
        { text: "The Wise", house: House.RAVENCLAW },
        { text: "The Bold", house: House.SLYTHERIN },
      ],
    },
    {
      question: "How would your friends describe you?",
      answers: [
        { text: "Brave", house: House.GRYFFINDOR },
        { text: "Creative", house: House.RAVENCLAW },
        { text: "Clever", house: House.SLYTHERIN },
        { text: "Kind", house: House.HUFFLEPUFF },
      ],
    },
    {
      question: "What is your favorite subject in school?",
      answers: [
        { text: "Potions", house: House.SLYTHERIN },
        { text: "Defence Against the Dark Arts", house: House.GRYFFINDOR },
        { text: "Care of Magical Creatures", house: House.HUFFLEPUFF },
        { text: "Transfiguration", house: House.RAVENCLAW },
      ],
    },
  ];

  quiz.forEach(q => shuffle(q.answers));
  shuffle(quiz);

  return {
    quiz,
    answers: new Array(quiz.length),
    currentIndex: 0,
    house: undefined,
  };
}

class App extends Component {
  constructor() {
    super();

    this.state = initialState();
    this.reset = this.reset.bind(this);
    this.back = this.back.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
  }

  reset() {
    this.setState(initialState());
  }

  back() {
    this.setState(s => {
      s.currentIndex = Math.max(s.currentIndex - 1, 0);
      return s;
    });
  }

  setAnswer(answer) {
    this.setState(s => {
      s.answers[s.currentIndex] = answer;
      s.currentIndex += 1;
      if (s.currentIndex >= s.quiz.length) {
        s.house = this.determineHouse();
      }
      return s;
    });
  }

  determineHouse() {
    const { answers } = this.state;
    const index = Math.floor(Math.random() * answers.length);
    return answers[index];
  }

  render() {
    const { quiz, currentIndex, house } = this.state;
    if (house) {
      return <StyledApp><Final startOver={this.reset} house={house}/></StyledApp>;
    }

    return (
      <StyledApp>
        {
          currentIndex > 0 &&
            <BackWrapper onClick={this.back}>
              <ArrowLeft width={25} height={25} color="#000000" strokeWidth="10%" />
            </BackWrapper>
        }
        <ReloadWrapper onClick={this.reset}>
          <Reload width={25} height={25} color="#000000" strokeWidth="10%" />
        </ReloadWrapper>
        <Question {...quiz[currentIndex]} setAnswer={this.setAnswer} />
        <ProgressWrapper>
          {currentIndex + 1} / {quiz.length}
        </ProgressWrapper>
      </StyledApp>
    );
  }
}

export default App;
