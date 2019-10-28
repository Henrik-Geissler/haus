import React from 'react';
import styled from 'styled-components';

import GlobalStyles, { globalPadding } from './GlobalStyles';
import Header from './Header';
import Charts from './Charts';

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Content>
      <Charts />
    </Content>
  </>
);

const Content = styled.div`
  margin: 0;
  padding: ${globalPadding}px;
`;

export default App;
