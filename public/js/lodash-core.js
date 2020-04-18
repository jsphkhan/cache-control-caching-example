//custom lodash module

(function() {
  var lodash = {
    version: 1,
    join: function(arr) {
      return arr.join('');
    }
  };

  this.lodash = lodash;
})(this);
