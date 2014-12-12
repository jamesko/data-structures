var Queue = function() {
    var obj = Object.create(queueMethods);
    obj.count = 0;
    return obj;
};

var queueMethods = {
    
    enqueue: function(){
        this.count++;
    },
    
    dequeue: function(){
        if(this.count > 0) {
            this.count--;
        }
        
    },
    
    size: function(){
        return this.count;
    }
    
};


