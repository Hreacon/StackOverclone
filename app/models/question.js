import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  content: DS.attr(),
  author_first: DS.attr(),
  author_last: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  author: Ember.computed('author_first', 'author_last', {
    get(key) {
      return this.get('author_first') + ' ' + this.get('author_last');
    }, set(key, value) {
      var [firstname, lastname] = value.split(' ');
      this.set('author_first', firstname);
      this.set('author_last', lastname);
    }
  }),
});
