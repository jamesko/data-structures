var Queue = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    count += 1;
    storage[count] = value;
  };

  someInstance.dequeue = function(){
    var temp = storage[count];
    if (count >0) {
      count -= 1;
    }
    return temp;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
