import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3em;
  font-weight: normal;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const Button = styled.div`
  display: block;
  width: 20em;
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  border: 1px solid #aaa;
  margin-bottom: 15px;
`;
