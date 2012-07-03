define(['lib/models/Image'], function(SpellImage) {
   var DrawImage = Class.extend({
       init : function() {
           
       },
       create : function(name, properties) {
           return new SpellImage(name, properties);
       }
   });
    
   return DrawImage;
});