import Ember from 'ember';

export default Ember.Component.extend({
  editMode: false,
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
