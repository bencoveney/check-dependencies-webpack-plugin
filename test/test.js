const plugin = require("../bin");

const instance = new plugin({});

const compilation = {
  errors: []
};

instance.apply({
  hooks: {
    make: {
      tapPromise: function(name, callback) {
        callback(compilation).then(
          result => {
            console.log(result);
          },
          () => {
            console.log(compilation.errors);
          }
        );
      }
    }
  }
});
