/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define([
    'jquery', 
    'lib/bootstrap', 
    'lib/models/StageHistory', 
    'lib/models/ClickHistory',
    'lib/models/Shape',
    'lib/models/Context'
], function ($, Bootstrap, StageHistory, ClickHistory, Shape, Context) {
      
      
      
      var MyBootstrap = new Bootstrap();
      
      console.log('EXECC');
      
    //--------------------------
      
//    objects = [];
//    
//    function clearObjects() {
//        objects = [];
//    }
    
    
//    function Shape(shapeName, cx, cy, width, height) {
//        this.name = shapeName;
//        this.cx = cx;
//        this.cy = cy;
//        this.width = width;
//        this.height = height;
//    }

//    //======== Objeto EVENT GENERICO
//    define([], function() {
//       var Event = Class.extend({
//           
//       });
//       
//       return Event;
//    });
//    
//    //======== Objeto CLICKEVENT GENERICO
//    define(['lib/module/Event/event'], function(Event) {
//       var ClickEvent = Event.extend({
//           
//       });
//       
//       return ClickEvent;
//    });
//
//
//    //======== Objeto DRAW GENERICO
//    define([], function() {
//        var Draw = Class.extend({
//            
//        });
//        
//        return Draw;
//    })
//
//
//    //========= Objeto DRAWSHAPE GENERICO
//    define(['lib/Draw/draw', 'lib/x/context'], function(Draw, Context) {
//        var DrawShape = Draw.extend({
//            draw : Context.fillRect(cx, cy, width, height)
//        });
//        
//        return DrawShape;
//    });
  
    
//    function drawshape(ctx, shapeName, cx, cy, width, height, isGhostShape) {
//        
//        
//        var isGhostShape = isGhostShape || false;
//        
//        var shape = new Shape(shapeName, {
//            x : cx, 
//            y : cy, 
//            width: width, 
//            height:height
//        });
//                    
//             
//        if(!isGhostShape) {
//            SpellStorage.Objects.insert(shape);
//        }
//        
//        
//        
//        ctx.fillRect(cx, cy, width, height);
//    }
    
    
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
    
    
//    function getLastClick() {
//        return SpellStorage.ClickHistory.getLast();
//    }
      
    
    
    
    
    //------------------------
    
      
//    function loadPage(pageName) {
//        var time = SpellStorage.Settings.Setup.frameRate;
//        
//        if(SpellStorage.Animation.isLoopAllowed()) {
//            return setInterval(eval(pageName),time);
//        } else {
//            eval([pageName,'();'].join(''));
//        }        
//    }
    
    //-----------------------
    
    function drawPage(pageName) {        
//        game_obj.unbind();
        game_obj.click(eval([pageName,'_','click'].join('')));
//        SpellStorage.DrawCount.add();
        
//        SpellStorage.StageHistory.insert(new StageHistory(pageName));        
    }
    
//    function menu() {
//        drawPage('menu');
//    }
     
     
    //############
//    function page1() {
//        drawPage('page1');
//        SpellStorage.Objects.wipe();
//        drawshape(ctx, 'caixa1', 50, 50, 100, 100);
//        drawshape(ctx, 'caixa2', 220, 220, 100, 100);
//    }
//    function page1_click(event) {
//        var clickedObject = stageClick('page1', event);
//        callStageObjectClickEvent('page1', clickedObject, event);
//    }
        
//    function page1_caixa1_click(event) {
//        alert('clicou na caixa 1!');
//    }
//        
//    function page1_caixa2_click(event) {
//        alert('IUUUHUU');
//    }
        
    //############    
    
//    function page2() {
//        drawPage('page2');
//        SpellStorage.Objects.wipe();
//        drawshape(ctx, 'caixa1', 0, 50, 300, 300);
//    }
//    function page2_click(event) {
//        stageClick('page2', event);
//    }
    //############
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //--------------------
          
    function bootstrap() {
        gameAppId = 'game-app';
        ghostGameAppId = 'ghost-canvas';
        
        
        var mainContext = new Context({
            name : gameAppId,
            width: 800,
            height: 600
        });
 
        game_obj = mainContext.getJQueryObject();
        ctx = mainContext.getContext();
        game_obj.appendTo('body');
        
        
        var ghostContext = new Context({
            name : ghostGameAppId,
            width : game_obj.width(),
            height : game_obj.height()
        });
        ghostJQueryObj = ghostContext.getJQueryObject();
        ghostTagObj = ghostJQueryObj[0];
//        ghostJQueryObj = createAppCanvas(ghostGameAppId, game_obj.width(), game_obj.height());        
//        ghostTagObj = ghostJQueryObj[0];
            
        //loadPage(SpellStorage.Settings.Pages.rootPage);
        MyBootstrap.getPages().load('Page1');
        
        // SpellStorage.Settings
        // Spell.getSettings().setFrameRate();
        // Page.load(homePage);
        
        SpellStorage.Contexts.insert(mainContext);
        SpellStorage.Contexts.insert(ghostContext);
        MyBootstrap.dispatch();
    }
        
//    function createAppCanvas(canvasId, width, height) {
//        return $("<canvas>").attr({
//            id : canvasId,
//            width: width,
//            height: height
//        });
//    }
//        
//    function getJQueryById(tagId) {
//        return $(['#',tagId].join(''));
//    }
        
    SpellStorage.Animation.disable();
    bootstrap();
});