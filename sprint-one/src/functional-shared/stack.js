var Stack = function(){
  var obj = {count: 0};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push  :  function(){
    this.count += 1;
  },

  pop   :  function(){
    this.count -= 1;

  },

  size  :  function(){ return this.count;}
};


