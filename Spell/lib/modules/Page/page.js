define([
    'lib/modules/Page/core/page', 
    'lib/models/StageHistory',
    ], function(PageCore, StageHistory, Util) {
        var PageMethods = PageCore.extend({
            /**
             * This is the main method of Page Module.
             * Basicly, it requires a target Page and call 'setup' and 'draw' methods.
             */
            load : function(PageName) {
                var __self = this;
                this.initialize(PageName);

                require([['app/pages/',PageName].join('')],function(Page) {
                    var actualPage = new Page();                 
                    __self.runPageSetupIfNeeded(actualPage);

                    if(SpellStorage.Animation.isLoopAllowed()) {
                        __self.multipleDraw(actualPage);
                    } else {
                        __self.singleDraw(actualPage);
                    }
                });
            },
            
            /**
             * This method receives a Page object and check if setup method exists to call.
             */
            runPageSetupIfNeeded : function(Page) {
                if(typeof(Page.setup) == 'function') {
                    Page.setup();
                }
            },
            
            /**
             * This method initialize Page Module, cleaning and logging some things.
             */
            initialize : function(PageName) {
                SpellStorage.StageHistory.insert(new StageHistory(PageName));
                SpellStorage.Objects.wipe();
            },
            
            /**
             * This method is called when the Stage have DrawLoop enabled.
             * It redraws the page over and over based on frameRate setting.
             */
            multipleDraw : function(Page) {
                this.interval = setInterval(function() {
                    var Stage = SpellStorage.StageHistory.getLast();
                    SpellStorage.Contexts.getMain().clear();
                    SpellStorage.DrawCount.add(); 
                    Page.draw();
                    Stage.setStageObject(Page);
                }, SpellStorage.Settings.Setup.frameRate);
            },
            
            /**
             * This method is called when the Stage have DrawLoop disabled.
             * It redraws the page once.
             */
            singleDraw : function(Page) {
                var Stage = SpellStorage.StageHistory.getLast();
                SpellStorage.DrawCount.add(); 
                Page.draw();
                Stage.setStageObject(Page); 
            }
        });
    
        return PageMethods;
    });