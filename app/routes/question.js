import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveMe(question) {
      question.save();
      this.transitionTo('question', question.id);
    },
    saveNewAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      // question.get('answer').addObject(newAnswer);
      console.log("i am useless");
      newAnswer.save().then(function() {
        return question.save();
      });
    }
  }
});
