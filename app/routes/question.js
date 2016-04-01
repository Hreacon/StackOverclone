import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveMe(question) {
      console.log("attempting save");
      question.save();
      this.transitionTo('question', question.id);
    }
  }
});
