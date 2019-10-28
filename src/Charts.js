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

const charts = [
  {
    type: 'radar',
    dataSet: dataSets.partyByRegion,
  },
  {
    type: 'doughnut',
    dataSet: dataSets.votesByMethod,
  },
  {
    type: 'bar',
    dataSet: dataSets.sexByRegion,
    options: barChartOptions,
  },
];

const Charts = () =>
  charts.map((chart, index) => (
    <Chart
      key={`Chart${index + 1}`}
      type={chart.type}
      dataSet={chart.dataSet}
      options={chart.options}
    />
  ));

export default Charts;
