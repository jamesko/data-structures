var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0;
  return obj;
};

var stackMethods = {
  size : function(){return this.count;}
};


