var Stack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    count += 1;
    storage[count] = value;

  };

  someInstance.pop = function(){
    var temp = storage[count];
    if (count > 0) {
    count -= 1;
    }
    return temp;

  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
