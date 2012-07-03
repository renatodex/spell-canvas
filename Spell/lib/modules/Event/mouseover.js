define(['lib/global_storage', 'lib/models/ClickHistory', 'lib/modules/Draw/draw'], function(SpellStorage, ClickHistory, Draw) {
    var EventMouseOver = Class.extend({
        init : function() {
            this.mainJQuery = null;
            this.canvasCoordinates = [];
        },
        
        bind : function() {
            var self = this;
            this.mainJQuery = SpellStorage.Contexts.getMain().getJQueryObject();
            this.mainJQuery.mousemove(function(event) {
                var movedObject = self.getMovedObject(event);
                if(movedObject) {
                    self.callEventObject(movedObject);
                } else {
                    var stageObject = self.getStageObject();
                    var mouseOverStageFunction = stageObject.mouseOverStage;
                    if(typeof(mouseOverStageFunction) == 'function') {
                        mouseOverStageFunction();
                    }
                }
            });
        },
        
        callEventObject : function(object) {  
            var stageObject = this.getStageObject();
            var objectMouseOverFunction = eval(['stageObject.',object.name,'_', 'mouseOver', ';'].join(''));
   
            if(typeof(objectMouseOverFunction) == 'function') {
                this.beforeEvent();
                objectMouseOverFunction(object);
            }
        },
        
        beforeEvent : function() {
        // Nothing to do here  
        },
        
        getMovedObject : function(event) {            
            this.canvasCoordinates = [
            event.pageX-this.mainJQuery.offset().left,
            event.pageY-this.mainJQuery.offset().top
            ];
        
            var objects = SpellStorage.Objects.getStorage();
            var total_objects = objects.length;
         
            for(var i = 0; i < total_objects; i++) {
                var value = objects[i];
                if(this.canvasCoordinates[0] >= value.pos_x 
                    && this.canvasCoordinates[0] <= (value.pos_x+value.width) 
                    && this.canvasCoordinates[1] >= value.pos_y
                    && this.canvasCoordinates[1] <= (value.pos_y+value.height)) {
                    return value;
                }
            }          
            
            return null;
        },
        
        getStageObject : function() {
            var actualStage = SpellStorage.StageHistory.getLast();
            return actualStage.getStageObject();             
        }
        
    });
   
    return EventMouseOver;
});