    function stageClick(stageName, event) {
//        SpellStorage.ClickHistory.insert(new ClickHistory(stageName, event.pageX, event.pageY));
        return getClickedObject(event);
    }   

    function getClickedObject(event) {
        ghostCtx = ghostTagObj.getContext('2d');
        ghostCtx.clearRect(0, 0, 800, 600);
            
        var objects = SpellStorage.Objects.getStorage();
            
        for(var i = 0; i < objects.length; i++) {
                
            var key = i;
            var value = objects[i];
                
            drawshape(ghostCtx, null, value.x, value.y, value.width, value.height, true);
                
            var imageData = ghostCtx.getImageData(
                event.pageX-game_obj.offset().left, 
                event.pageY-game_obj.offset().top, 1, 1
                );
            if(imageData.data[3] > 0) {
                return value.name;
            }
        }

        return null;
    }
    
    function callStageObjectClickEvent(stageName, objectName, event) {
        var objectName = objectName || undefined;
        if(typeof(objectName) != 'undefined') {
            console.log([stageName,'_',objectName,'_', 'click', '(',event,');'].join(''));
//            eval([stageName,'_',objectName,'_', 'click', '();'].join(''));
        }
    }