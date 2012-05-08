define([
    'lib/modules/Spell/core/spell',
    'lib/modules/Debug/debug',
    'lib/modules/Util/util'
], function(SpellCore, DebugMethods, UtilMethods) {
   var SpellMethods = SpellCore.extend({
        getDebug : function() {
            return new DebugMethods();
        },
        getUtil : function() {
            return new UtilMethods();
        }
   });
   
   return SpellMethods;
});