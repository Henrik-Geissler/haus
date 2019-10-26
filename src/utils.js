import csv from 'csvtojson';

import dataMap from './data/mapping';

const formatData = (results, type) => {
  const { groupBy } = dataMap[type];
  const formattedData = {
    labels: [],
    datasets: [],
  };

  results.forEach((entry, index) => {
    const group = entry[groupBy];
    const color = dataMap.colors[group];
    const formattedEntry = {
      label: group,
      backgroundColor: color,
      data: [],
    };

    if (index === 0) {
      formattedData.labels = Object.keys(entry).filter(key => key !== groupBy);
    }

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

export const fetchJsonData = dataType =>
  fetch(dataMap[dataType].path)
    .then(resp => resp.text())
    .then(csvString => csv().fromString(csvString))
    .then(results => formatData(results, dataType))
    .catch(error => {
      console.log({ error });
    });
