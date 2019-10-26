import randomColor from 'randomcolor';

import partyByRegion from './region_party_percent.csv';
import regionByMethod from './method_region_votes.csv';

export const dataSets = {
  partyByRegion: 'partyByRegion',
  regionByMethod: 'regionByMethod',
};

const dataMap = {
  colors: {
    // Parties
    'Liberal Party of Canada/Parti libéral du Canada': 'red',
    'Conservative Party of Canada/Parti conservateur du Canada': 'blue',
    'New Democratic Party/Nouveau Parti démocratique': 'orange',
    'Bloc Québécois/Bloc Québécois': 'purple',
    'Green Party of Canada/Le Parti Vert du Canada': 'green',
    // Regions
    'Newfoundland and Labrador/Terre-Neuve-et-Labrador': randomColor(),
    'Prince Edward Island/Île-du-Prince-Édouard': randomColor(),
    'Nova Scotia/Nouvelle-Écosse': randomColor(),
    'New Brunswick/Nouveau-Brunswick': randomColor(),
    'Quebec/Québec': randomColor(),
    Ontario: randomColor(),
    Manitoba: randomColor(),
    Saskatchewan: randomColor(),
    Alberta: randomColor(),
    'British Columbia/Colombie-Britannique': randomColor(),
    Yukon: randomColor(),
    'Northwest Territories/Territoires du Nord-Ouest': randomColor(),
    Nunavut: randomColor(),
  },
  partyByRegion: {
    desc: 'Percentage of valid votes by political affiliation',
    path: partyByRegion,
    groupBy: 'Political affiliation/Appartenance politique',
  },
  regionByMethod: {
    desc: 'Distribution of valid votes by voting method',
    path: regionByMethod,
    groupBy: 'Province',
  },
};

export default dataMap;
