import Ember from 'ember';

function numInc(n) {
  return Number(n) + 1;
}

export default Ember.Helper.helper(numInc);
