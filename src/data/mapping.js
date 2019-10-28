import randomColor from 'randomcolor';

import partyByRegion from './region_party_percent.csv';
import votesByMethod from './method_votes.csv';
import sexByRegion from './sex_region_seats.csv';

export const dataSets = {
  partyByRegion: 'partyByRegion',
  votesByMethod: 'votesByMethod',
  sexByRegion: 'sexByRegion',
};

const dataMap = {
  partyByRegion: {
    desc: 'Percentage of valid votes by political affiliation per region',
    path: partyByRegion,
    groupBy: 'Political affiliation/Appartenance politique',
    colors: {
      'Liberal Party of Canada/Parti libéral du Canada': 'rgba(255, 0, 0, 0.5)',
      'Conservative Party of Canada/Parti conservateur du Canada':
        'rgba(0, 0, 255, 0.5)',
      'New Democratic Party/Nouveau Parti démocratique':
        'rgba(255, 165, 0, 0.5)',
      'Bloc Québécois/Bloc Québécois': 'rgba(173, 216, 230, 0.5)',
      'Green Party of Canada/Le Parti Vert du Canada': 'rgba(0, 255, 0, 0.5)',
    },
  },
  votesByMethod: {
    desc: 'Distribution of valid votes per voting method',
    path: votesByMethod,
    groupBy: 'Total',
    colors: {
      'Valid Votes_Stationary Polls/Votes valides_Bureaux fixes': randomColor(),
      'Valid Votes_Mobile Polls/Votes valides_Bureaux itinérants': randomColor(),
      'Valid Votes_Advance Polls/Votes valides_Bureaux par anticipation': randomColor(),
      'Valid Votes_SVR/Votes valides_RES': randomColor(),
    },
  },
  sexByRegion: {
    desc: 'Distribution of seats by sex per region',
    path: sexByRegion,
    groupBy: 'Sex/Sexe',
    colors: {
      'Man/Homme': randomColor(),
      'Woman/Femme': randomColor(),
    },
  },
};

export default dataMap;
