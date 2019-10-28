import csv from 'csvtojson';

import dataMap from './data/mapping';

const formatData = (results, dataType, chartType) => {
  const isDoughnutChart = chartType === 'doughnut';
  const { groupBy, colors } = dataMap[dataType];
  const formattedData = {
    labels: [],
    datasets: [],
  };

  results.forEach((entry, index) => {
    const group = entry[groupBy];
    let color = colors[group];

    if (index === 0) {
      formattedData.labels = Object.keys(entry).filter(key => key !== groupBy);
    }

    if (isDoughnutChart && index === 0) {
      color = formattedData.labels.map(doughnutLabel => colors[doughnutLabel]);
    }

    const formattedEntry = {
      label: group,
      backgroundColor: color,
      data: [],
    };

    formattedData.labels.forEach(chartLabel => {
      const dataPoint = parseFloat(entry[chartLabel]);
      formattedEntry.data = [].concat(formattedEntry.data, [dataPoint]);
    });

    formattedData.datasets = [].concat(formattedData.datasets, [
      formattedEntry,
    ]);
  });

  return formattedData;
};

export const fetchJsonData = (dataType, chartType) =>
  fetch(dataMap[dataType].path)
    .then(resp => resp.text())
    .then(csvString => csv().fromString(csvString))
    .then(results => formatData(results, dataType, chartType))
    .catch(error => {
      console.log({ error });
    });
