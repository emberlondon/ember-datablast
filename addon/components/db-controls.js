import Ember from 'ember';
import layout from '../templates/components/db-controls';
const { Component, computed } = Ember;

export default Component.extend({
  layout: layout,

  router: computed(function() {
    return this.container.lookup('router:main');
  }),

  count: computed.readOnly('router.count'),
  currentIndex: computed('router.currentIndex', function() {
    return this.get('router.currentIndex') + 1;
  }),
  nextPath: computed.readOnly('router.nextPath'),
  prevPath: computed.readOnly('router.prevPath')
});
