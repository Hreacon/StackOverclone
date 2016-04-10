import Ember from 'ember';

export default Ember.Component.extend({
  editMode: false,
  author: Ember.computed('model.author_first', 'model.author_last', {
    get(key) {
      return this.get('model.author_first') + ' ' + this.get('model.author_last');
    }
  }),
  actions: {
    activateEditMode() {
      this.set("editMode", true);
    },
    saveEditQuestion(question) {
      console.log("sending action");
      this.sendAction('saveMe', question);
      this.set('editMode', false);
    },
    upVote(comment) {
      this.sendAction('upVote', comment);
    },
    downVote(comment) {
      this.sendAction('downVote', comment);
    }
  }
});
