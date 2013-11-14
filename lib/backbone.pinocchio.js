var Pinocchio = (function(global, Backbone, Marionette, _){
  "use strict";

  // Define and export the Pinocchio namespace
  var Pinocchio = {};
  Backbone.Pinocchio = Pinocchio;

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
  

  return Pinocchio;
})(this, Backbone, Marionette, _);
