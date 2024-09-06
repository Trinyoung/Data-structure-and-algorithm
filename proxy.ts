var handler = {
    get: function(target, name) {
      if (name === 'prototype') {
        return Object.prototype;
      }
      if (typeof target[name] === 'function') {
        return target[name].bind(target);
      }
      return 'Hello, ' + name;
    },
  
    apply: function(target, thisBinding, args) {
      return args[0];
    },
  
    construct: function(target, args) {
      return {value: args[1]};
    }
  };
  
  var fproxy = new Proxy(function(x, y) {
    return x + y;
  }, handler);
  
function request() {
  
}
request.get = () => {
    console.log(1, 2 , 3)
}
request.post = () => {
    console.log(4, 5, 6)
}