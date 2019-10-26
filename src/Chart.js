import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

import { fetchJsonData } from './utils';
import data from './data/mapping';

const ChartComponent = ({ dataSet, type }) => {
  const chartTitle = data[dataSet].desc;
  const canvas = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvas.current, {
      type,
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

    fetchJsonData(dataSet).then(chartData => {
      chart.data = chartData;
      chart.update();
    });

    return () => {
      chart.destroy();
    };
  }, [dataSet, type]);

  return (
    <Wrapper>
      <ChartTitle>{chartTitle}</ChartTitle>
      <Canvas ref={canvas} aria-label='Chart' role='img' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto 50px auto;
  padding: 0 0 50px 0;
  width: 60%;
  border-bottom: 1px solid #000000;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
`;

const ChartTitle = styled.h3`
  margin: 0 0 30px 0;
  padding: 0;
  text-align: center;
  text-transform: capitalize;
`;

const Canvas = styled.canvas`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export default ChartComponent;
