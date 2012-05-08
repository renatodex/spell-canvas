define(['lib/modules/Spell/spell'], function(SpellMethods) {
   var Model = Class.extend({
       init : function() {
           
       },
       getSpell : function() {
           return new SpellMethods();
       }
   });
   
   return Model;
});

