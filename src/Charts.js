import React from 'react';
import styled from 'styled-components';

import Chart from './Chart';
import { dataSets } from './data/mapping';

const Charts = () => {
  return (
    <Wrapper>
      <Chart dataSet={dataSets.partyByRegion} type='bar' />
      <Chart dataSet={dataSets.regionByMethod} type='bar' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default Charts;
