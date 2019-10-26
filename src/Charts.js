import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

const randomScalingFactor = () => {
  return Math.random().toFixed(2);
};

const data = {
  labels: ['ON', 'BC', 'QB', 'AB', 'NL', 'SK', 'MB'],
  datasets: [
    {
      label: 'Set 1',
      backgroundColor: 'red',
      data: [
        1,
        2,
        3,
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: 'Set 2',
      backgroundColor: 'orange',
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: 'Set 3',
      backgroundColor: 'green',
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
  ],
};

const Charts = () => {
  const canvas = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvas.current, {
      type: 'bar',
      data,
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

    console.log({ chart });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <Canvas ref={canvas} aria-label='Chart' role='img' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const Canvas = styled.canvas`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export default Charts;
