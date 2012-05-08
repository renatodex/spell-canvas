define(['lib/models/Model'], function(Model) {
    var Animation = Model.extend({
        init : function() {
            this.loopStatus = false;
        },
        enable : function() {
            this.loopStatus = true;
        },
        disable : function() {
            this.loopStatus = false;
        },
        isLoopAllowed : function() {
            return this.loopStatus;
        }
    });
    
    return Animation;
});