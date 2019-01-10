const plugin = require("../bin");

const instance = new plugin.default({
  verbose: true
});

instance.apply({
  hooks: {
    beforeRun: {
      tapPromise: function(name, callback) {
        callback().then(result => console.log(result));
      }
    }
  }
});
