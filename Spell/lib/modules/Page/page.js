define(['lib/modules/Page/core/page', 'lib/models/StageHistory'], function(PageCore, StageHistory) {
    var PageMethods = PageCore.extend({
        load : function(PageName) {
            SpellStorage.StageHistory.insert(new StageHistory(PageName));
            SpellStorage.Objects.wipe();

            require([['app/pages/',PageName].join('')],function(Page) {
               if(SpellStorage.Animation.isLoopAllowed()) {
                    this.interval = setInterval(function() {
                        SpellStorage.Contexts.getMain().clear();
                        SpellStorage.DrawCount.add(); 
                        new Page();
                        }, SpellStorage.Settings.Setup.frameRate);
               } else {
                   SpellStorage.DrawCount.add(); 
                   new Page();
               }
            });
        }
    });
    
    return PageMethods;
});