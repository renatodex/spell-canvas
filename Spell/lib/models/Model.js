define(['lib/modules/Spell/spell', 'lib/util'], function(SpellMethods, Util) {
   var Model = Class.extend({
       init : function() {
           this._uid = Util.generateUid();
       },
       getSpell : function() {
           return new SpellMethods();
       },
       getUid : function() {
           return this._uid;
       }
   });
   
   return Model;
});

