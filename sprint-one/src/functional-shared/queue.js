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
              this.count--;
    },
    
    size   : function(){
        return this.count;
    }
    
};



