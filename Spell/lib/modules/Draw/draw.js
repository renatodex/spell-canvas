define([
    'lib/modules/Draw/core/draw',
    'lib/modules/Draw/square',
    'lib/modules/Draw/image'
], function(DrawCore, DrawSquare, DrawImage) {
    
   var DrawMethods = DrawCore.extend({
       Square : function(name, properties) {
           var drawSquare = new DrawSquare();
           return drawSquare.create(name, properties);
       },
       Image : function(name, properties) {
           var drawImage = new DrawImage();
           return drawImage.create(name, properties);
       }
   });
    
   return DrawMethods;
});