describe('Pinocchio.Application', function() {

  describe('Plugin System', function() {

    it('should add plugin method to the instance of an application', function() {
      Pinocchio.Application.Plugin.test = function() {
        return true;
      };
      var app = new Pinocchio.Application;
      expect(app.test).toBeTruthy();
    });

    it('should execute the method when called from a instance of app', function() {
      Pinocchio.Application.Plugin.test = sinon.spy();
      var app = new Pinocchio.Application;
      app.test();
      expect(Pinocchio.Application.Plugin.test).toHaveBeenCalledOnce();
    });

  });

});
