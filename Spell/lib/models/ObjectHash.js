define(['lib/models/Model'], function(Model) {
    var ObjectHash = Model.extend({
        init : function(name, value) {
            this.name = name;
            this.value = value;
        } 
    });
    
    return ObjectHash;
});