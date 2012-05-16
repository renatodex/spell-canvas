define(['lib/storage', 'lib/models/ClickHistory', 'lib/modules/Draw/draw'], function(SpellStorage, ClickHistory, Draw) {
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

                require([ ['app/pages/',actualStageName].join('') ], function(Page) {              
                    console.log('fsas');
                    self.callStageEvent(event);
                });                
            });
        },
        callStageEvent : function(event) {
            var actualStage = SpellStorage.StageHistory.getLast();
            var actualStageObject = actualStage.getStageObject();
            
            var stageDownFunction = actualStageObject.stage_down;
            if(typeof(stageDownFunction) == 'function') {
                this.beforeStageDown(event);
                actualStageObject.stage_down();
            } else {
                console.log('There is no method for Stage Click yet.');
            }
        },
        
        beforeStageDown : function(event) {
            console.log('magia negra start');
          this.getClickedObject(event);  
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

            
//            
//            for(var i = 0; i < objects.length; i++) {
//                var key = i;
//                var value = objects[i];
//                
//                SpellDraw.Square('ghost-box', {
//                    x: value.x,
//                    y: value.y,
//                    width: value.width,
//                    height: value.height,
//                    context: ghostContext
//                }).render();
//                
//                var imageData = ghostContext.getImageData(
//                    event.pageX-mainJQuery.offset().left, 
//                    event.pageY-mainJQuery.offset().top, 1, 1
//                    );
//                if(imageData.data[3] > 0) {
//                    return value.name;
//                }
//            }

            return null;
        }      
    });
   
    return EventMouseDown;
});