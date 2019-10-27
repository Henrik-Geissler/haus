import randomColor from 'randomcolor';

import partyByRegion from './region_party_percent.csv';
import regionByMethod from './method_region_votes.csv';
import sexByRegion from './sex_region_seats.csv';

export const dataSets = {
  partyByRegion: 'partyByRegion',
  regionByMethod: 'regionByMethod',
  sexByRegion: 'sexByRegion',
};

const dataMap = {
  colors: {
    // Parties
    'Liberal Party of Canada/Parti libéral du Canada': 'rgba(255, 0, 0, 0.5)',
    'Conservative Party of Canada/Parti conservateur du Canada':
      'rgba(0, 0, 255, 0.5)',
    'New Democratic Party/Nouveau Parti démocratique': 'rgba(255, 165, 0, 0.5)',
    'Bloc Québécois/Bloc Québécois': 'rgba(173, 216, 230, 0.5)',
    'Green Party of Canada/Le Parti Vert du Canada': 'rgba(0, 255, 0, 0.5)',
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
    // Sexes
    'Man/Homme': 'blue',
    'Woman/Femme': 'red',
  },
  partyByRegion: {
    desc: 'Percentage of valid votes by political affiliation per region',
    path: partyByRegion,
    groupBy: 'Political affiliation/Appartenance politique',
  },
  regionByMethod: {
    desc: 'Distribution of valid votes by region per voting method',
    path: regionByMethod,
    groupBy: 'Province',
  },
  sexByRegion: {
    desc: 'Distribution of seats by sex per region',
    path: sexByRegion,
    groupBy: 'Sex/Sexe',
  },
};

export default dataMap;
