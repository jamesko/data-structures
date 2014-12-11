var Stack = function(){
  var obj = {count   : 0, 
             storage : {}
  };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push  :  function(value){
    this.count += 1;
    this.storage[this.count] = value;
  },

  pop   :  function(){
    var temp =  this.storage[this.count];
    delete this.storage[this.count];

    if (this.count > 0) {
      this.count -= 1;
      return temp;
    }


  },

  size  :  function(){ return this.count;}
};


