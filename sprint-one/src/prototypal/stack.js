var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0;
  return obj;
};

var stackMethods = {
  push : function() {
    this.count++;
  },
  pop: function(){
    this.count --;
  },
  size : function(){
    return this.count;
  }
};


