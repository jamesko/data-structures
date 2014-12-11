var Queue = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    count += 1;
  };

  someInstance.dequeue = function(){
    if (count >0) {
      count -= 1;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
