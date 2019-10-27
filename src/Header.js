import React from 'react';
import styled from 'styled-components';

import { globalPadding } from './GlobalStyles';

const Header = () => {
  return (
    <Wrapper>
      <Title>Vote Viz</Title>
      <Source>
        Source:{' '}
        <a
          href='https://open.canada.ca/data/en/dataset/775f3136-1aa3-4854-a51e-1a2dab362525'
          target='_blank'
          rel='noopener noreferrer'
        >
          42nd General Election: Official Voting Results (open.canada.ca)
        </a>
      </Source>
      <Tip>Tip: Click legends to toggle inclusion in chart.</Tip>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0;
  padding: ${globalPadding}px;
  width: 100vw;
  background-color: #ffffff;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 4vw;
`;

const Source = styled.h2`
  margin: 0 0 30px 0;
  padding: 0;
  font-size: 1.5vw;
  font-style: italic;
  color: #666666;

  a {
    color: #666666;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Tip = styled.p`
  margin: 0;
  padding: 0;
`;

export default Header;
