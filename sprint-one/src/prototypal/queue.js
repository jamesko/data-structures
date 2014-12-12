var Queue = function() {
    var obj = Object.create(queueMethods);
    obj.count = 0;
    return obj;
};

var queueMethods = {
    
    size: function(){
        return 0;
    }
    
};


