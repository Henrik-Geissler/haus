import React from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Charts from './Charts';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
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
        </Header>
        <Content>
          <Charts />
        </Content>
      </Wrapper>
    </>
  );
};

const globalPadding = 30;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  margin: 0;
  padding: ${globalPadding}px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 4vw;
`;

const Source = styled.h2`
  margin: 0;
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

const Content = styled.div`
  margin: 0;
  padding: ${globalPadding}px;
`;

export default App;
