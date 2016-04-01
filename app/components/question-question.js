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
    }
  }
});
