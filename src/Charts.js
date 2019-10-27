import React from 'react';

import Chart from './Chart';
import { dataSets } from './data/mapping';

const barChartOptions = {
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
};

const radarChartOptions = {};

const Charts = () => {
  return (
    <>
      <Chart
        dataSet={dataSets.partyByRegion}
        type='radar'
        options={radarChartOptions}
      />
      <Chart
        dataSet={dataSets.regionByMethod}
        type='bar'
        options={barChartOptions}
      />
      <Chart
        dataSet={dataSets.sexByRegion}
        type='bar'
        options={barChartOptions}
      />
    </>
  );
};

export default Charts;
