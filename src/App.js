import React from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

export default App;
