Pinocchio.Application = Marionette.Application.extend({
  constructor: function (options) {
    this._addPlugins();
  },

  _addPlugins: function() {
    _.extend(Pinocchio.Application.prototype, Pinocchio.Application.Plugin);
  }
});

Pinocchio.Application.Plugin = {};

// Copy the `extend` function used by Backbone's classes
Pinocchio.Application.extend = Marionette.extend;
