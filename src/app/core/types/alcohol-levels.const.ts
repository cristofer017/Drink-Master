export const ALCOHOL_LEVELS = [
  {
    range: {min: 1, max: 59},
    state: 'normal'
  },
  {
    range: {min: 60, max: 199},
    state: 'drunk'
  },
  {
    range: {min: 200, max: 499},
    state: 'extreme drunk'
  },
  {
    range: {min: 500},
    state: 'high possibility of death'
  },
];
