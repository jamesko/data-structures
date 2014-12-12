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
    if (this.count > 0) {
      this.count --;
    }
  },
  size : function(){
    return this.count;
  }
};


