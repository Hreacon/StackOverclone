import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(comment) {
      this.sendAction('upVote', comment);
    },
    downVote(comment) {
      this.sendAction('downVote', comment);
    }
  }
});
