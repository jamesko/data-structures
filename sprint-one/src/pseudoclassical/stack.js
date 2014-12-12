var Stack = function() {
  this.count = 0;
};

Stack.prototype = {
  push : function() {
    this.count++;
  },
  pop  : function() {
    this.count--;
  },
  size : function() {return this.count}
};


