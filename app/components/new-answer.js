import Ember from 'ember';

export default Ember.Component.extend({
  addMode: false,
  actions: {
    activateAddMode() {
      this.set('addMode', true);
    },
    saveNewAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('model'),
      };
      this.sendAction('saveNewAnswer', params);
      this.set('addMode', false);
    }
  }
});
