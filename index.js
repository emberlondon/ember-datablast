/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-datablast',

  treeForPublic: function() {
    return path.join(this.project.root, 'vendor');
  }
};
