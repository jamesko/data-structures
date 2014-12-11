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
    if (this.count > 0) {
      this.count -= 1;
    }


  },

  size  :  function(){ return this.count;}
};


