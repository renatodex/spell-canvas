define(['lib/models/Square'], function(Square) {
   var DrawSquare = Class.extend({
       init : function() {
           
       },
       create : function(name, properties) {
           return new Square(name, properties);
       }
   });
    
   return DrawSquare;
});