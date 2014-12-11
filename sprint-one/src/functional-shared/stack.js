var Stack = function(){
  var obj = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push  :  function(){},
  pop   :  function(){},
  size  :  function(){ return 0;}
};


