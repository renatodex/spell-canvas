define([
    'lib/modules/Spell/spell', 
    'lib/storage',
    'lib/pages',
    'lib/event'
], function(SpellModules, SpellStorage, SpellPages, SpellEvents) {

    Spell = new SpellModules();

    var Bootstrap = Class.extend({
        init : function() {
            this.pages = new SpellPages();            
        },
        getPages : function() {
            return this.pages;
        },
        dispatch : function() {
            SpellEvents.bindAll();
        }
    });
    
    return Bootstrap;
});