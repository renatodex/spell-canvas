define([], function() {
    var Collection = Class.extend({
        init : function() {
            this.storage = [];  
        },
        insert : function(object) {
            this.storage.push(object);
        },
        getStorage : function() {
            return this.storage;
        },
        getLast : function() {
            return this.storage[this.storage.length-1];
        },
        count : function() {
            return this.storage.length;
        }
    });
   
    return Collection;
});