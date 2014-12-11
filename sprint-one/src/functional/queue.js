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

    var temp = storage[1]; 
    delete storage[1];
    
    buffer = {};
    _.each(storage, function(value, key){
        buffer[key-1] = storage[key];
    })

    storage = buffer;

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
