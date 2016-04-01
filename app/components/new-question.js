import Ember from 'ember';

export default Ember.Component.extend({
  askingQuestion: false,
  actions: {
    saveNewQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.sendAction("saveNewQuestion", params);
      this.set('askingQuestion', false);
    },
    askAQuestion() {
      this.set('askingQuestion', true);
    }
  }
});
