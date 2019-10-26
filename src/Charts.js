import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

import { fetchJsonData } from './utils';

const Charts = () => {
  const canvas = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvas.current, {
      type: 'bar',
      data: null,
      options: {
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });

    fetchJsonData('partyByRegion').then(data => {
      chart.data = data;
      chart.update();
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <ChartConatiner>
        <ChartTitle>Party by Region</ChartTitle>
        <Canvas ref={canvas} aria-label='Chart' role='img' />
      </ChartConatiner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ChartConatiner = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 60%;
`;

const ChartTitle = styled.h3`
  margin: 0 0 30px 0;
  padding: 0;
  text-align: center;
`;

const Canvas = styled.canvas`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export default Charts;
