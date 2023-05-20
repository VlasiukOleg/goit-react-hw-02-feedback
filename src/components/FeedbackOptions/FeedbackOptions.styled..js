import styled from 'styled-components';

export const OptionsBtnWrapper = styled.div`
  text-align: center;
`;

export const OptionsBtn = styled.button`
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  padding: 5px 15px;
  margin-right: 10px;

  &:hover {
    background-color: lightblue;
  }
`;
