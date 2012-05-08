define(['lib/storage', 'lib/models/ClickHistory'], function(SpellStorage, ClickHistory) {
   var EventMouseDown = Class.extend({
      init : function() {
          
      },
      bind : function() {
          var mainContext = SpellStorage.Contexts.getMain().getJQueryObject();
          mainContext.click(this.baseEvent);
      },
      baseEvent : function(event) {
          var actualStage = SpellStorage.StageHistory.getLast().name;
          SpellStorage.ClickHistory.insert(new ClickHistory(actualStage, event.pageX, event.pageY));
          
          require([ ['app/pages/',actualStage].join('') ], function(Page) {
              var stageDownFunction = Page.prototype.stage_down;
              if(typeof(stageDownFunction) == 'function') {
                  Page.prototype.stage_down();
              } else {
                  console.log('There is no method for Stage Click yet.');
              }
          });
      }
   });
   
   return EventMouseDown;
});