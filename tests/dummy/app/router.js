import Ember from 'ember';
import config from './config/environment';
import RouteStepper from 'datablast/mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});

Router.map(function() {
  this.route('slide-2');
  this.route('bye');
});

export default Router;
