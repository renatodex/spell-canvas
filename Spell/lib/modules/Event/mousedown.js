define(['lib/global_storage', 'lib/models/ClickHistory', 'lib/modules/Draw/draw'], function(SpellStorage, ClickHistory, Draw) {
    var EventMouseDown = Class.extend({
        init : function() {
        },
        bind : function() {
            var self = this;
            var mainContext = SpellStorage.Contexts.getMain().getJQueryObject();

            mainContext.click(function(event) {
                var actualStage = SpellStorage.StageHistory.getLast();
                var actualStageName = actualStage.name;
                var actualStageObject = actualStage.getStageObject();
          
                SpellStorage.ClickHistory.insert(new ClickHistory(actualStageName, event.pageX, event.pageY));

                self.callStageEvent(event);
            //                require([ ['app/pages/',actualStageName].join('') ], function(Page) {              
            //                    self.callStageEvent(event);
            //                });                
            });
        },
        callStageEvent : function(event) {
            var actualStage = SpellStorage.StageHistory.getLast();
            var actualStageObject = actualStage.getStageObject();
            this.beforeEvent(event);
            
            
            var clickedObject = this.getClickedObject(event);
            if(clickedObject) {
                var objectMouseDownFunction = eval(['actualStageObject.',clickedObject.name,'_', 'mouseDown', ';'].join(''));
                if(typeof(objectMouseDownFunction) == 'function') {
                    objectMouseDownFunction(clickedObject, actualStageObject);
                } else {
                    console.log(['Theres not a MouseDown method for object named ', clickedObject.name].join(''));
                }                    
            } else {
                var stageDownFunction = actualStageObject.stage_down;
                if(typeof(stageDownFunction) == 'function') { 
                    actualStageObject.stage_down();
                } else {
                    console.log('There is no method for Stage Click yet.');
                }                
            }
        },
        
        beforeEvent : function(event) {
        // nothing to do
        },
        
        getClickedObject : function(event) {
            var SpellDraw = new Draw;

            var mainContextObj = SpellStorage.Contexts.getMain();
            var ghostContextObj = SpellStorage.Contexts.getGhost();
            var mainJQuery = mainContextObj.getJQueryObject();
            var mainContext = mainContextObj.getContext();
            var ghostContext = ghostContextObj.getContext();
            ghostContextObj.clear();
            var objects = SpellStorage.Objects.getStorage();
            var total_objects = objects.length;
                           
    
            for(var i = 0; i < total_objects; i++) {
                var value = objects[i];
                
                SpellDraw.Square('ghost-box', {
                    x: value.pos_x,
                    y: value.pos_y,
                    width: value.width,
                    height: value.height,
                    context: ghostContext,
                    discard : true
                }).render();
                
                
                var imageData = ghostContext.getImageData(
                    event.pageX-mainJQuery.offset().left, 
                    event.pageY-mainJQuery.offset().top, 1, 1
                    ); 
                        
                if(imageData.data[3] > 0) {
                    return value;
                }
            }

            return null;
        }      
    });
   
    return EventMouseDown;
});