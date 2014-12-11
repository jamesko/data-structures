var Queue = function(){
    var obj = {count : 0};
    
    _.extend(obj, queueMethods);
    
    return obj;
};

var queueMethods = {
    
    enqueue: function(){
              this.count++;
    },
    
    dequeue: function(){
              if (this.count > 0) {
                this.count--;
              }
    },
    
    size   : function(){
        return this.count;
    }
    
};



