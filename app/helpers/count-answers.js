import Ember from 'ember';

export function countAnswers(params/*, hash*/) {
  var count = 0;
  count = params[0].get('answers.length');

  if(count === 0) {
    return "No answers yet.";
  } else if( count === 1 ) {
    return count + " answer found.";
  } else if( count > 1 ) {
    return count + " answers found.";
  } else {
    return "No answers yet.";
  }
}

export default Ember.Helper.helper(countAnswers);
