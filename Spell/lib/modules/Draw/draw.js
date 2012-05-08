define([
    'lib/modules/Draw/core/draw',
    'lib/modules/Draw/square'
], function(DrawCore, DrawSquare) {
    
   var DrawMethods = DrawCore.extend({
       Square : function(name, properties) {
           var drawSquare = new DrawSquare();
           return drawSquare.create(name, properties);
       }
   });
    
   return DrawMethods;
});