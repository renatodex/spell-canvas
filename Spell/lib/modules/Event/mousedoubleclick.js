define([], function() {
   var EventMouseDown = Class.extend({
      init : function() {
      },
      bind : function() {
          var mainContext = SpellStorage.Contexts.getMain().getJQueryObject();
          mainContext.click(this.firstEvent);
      },
      firstEvent : function(event) {
          console.log("BEEP");
      }
   });
   
   return EventMouseDown;
});

