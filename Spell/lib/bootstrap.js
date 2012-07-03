define([
    'lib/modules/Spell/spell', 
    'lib/global_storage',
    'lib/pages',
    'lib/event',
    'lib/models/Context'
    ], function(SpellModules, SpellStorage, SpellPages, SpellEvents, Context) {

        Spell = new SpellModules();

        var Bootstrap = Class.extend({
            init : function() {
                this.pages = new SpellPages();
                this.baseBootstrap();
            },
            getPages : function() {
                return this.pages;
            },
            dispatch : function() {
                SpellEvents.bindAll();
            },
            baseBootstrap : function() {
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

                var startPage = SpellStorage.Settings.Pages.rootPage;

                this.getPages().load(startPage);
        
                SpellStorage.Contexts.insert(mainContext);
                SpellStorage.Contexts.insert(ghostContext);
                this.dispatch();            
            }
        });
    
        return Bootstrap;
    });