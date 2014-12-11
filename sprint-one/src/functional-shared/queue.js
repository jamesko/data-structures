var Queue = function(){
    var obj = {};
    
    _.extend(obj, queueMethods);
    
    return obj;
};

var queueMethods = {
    
    enqueue: function(){},
    
    dequeue: function(){},
    
    size   : function(){
        return 0;
    }
    
};



