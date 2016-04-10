import Ember from 'ember';

export default Ember.Component.extend({
  serving: Ember.inject.service(),
  actions: {
    upVote(comment) {
      this.sendAction('upVote', comment);
    },
    downVote(comment) {
      this.sendAction('downVote', comment);
    }
  }
});
