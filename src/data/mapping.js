import partyByRegion from './region_party_percent.csv';

const dataMap = {
  colors: {
    'Liberal Party of Canada/Parti libéral du Canada': 'red',
    'Conservative Party of Canada/Parti conservateur du Canada': 'blue',
    'New Democratic Party/Nouveau Parti démocratique': 'orange',
    'Bloc Québécois/Bloc Québécois': 'purple',
    'Green Party of Canada/Le Parti Vert du Canada': 'green',
  },
  partyByRegion: {
    path: partyByRegion,
    groupBy: 'Political affiliation/Appartenance politique',
  },
};

export default dataMap;
