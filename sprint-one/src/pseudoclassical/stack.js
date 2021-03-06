var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
    this.count++;
    this.storage[this.count] = value;
  };
  
Stack.prototype.pop = function() {
    var temp = this.storage[this.count];
    delete this.storage[this.count];
    if (this.count > 0) {
      this.count--;
    }
    return temp;
  };
  
Stack.prototype.size = function() {
    return this.count;
};