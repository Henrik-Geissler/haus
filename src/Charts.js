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

const Charts = () => {
  return (
    <>
      <Chart type='radar' dataSet={dataSets.partyByRegion} />
      <Chart type='doughnut' dataSet={dataSets.votesByMethod} />
      <Chart
        type='bar'
        dataSet={dataSets.sexByRegion}
        options={barChartOptions}
      />
    </>
  );
};

export default Charts;
