define([
    'lib/modules/Event/core/event',
    'lib/modules/Event/mousedown'
], function(EventCore, EventMouseDown) {
    var EventMethods = EventCore.extend({
       init : function() {
           
       },
       bindAll : function() {
           this.bindMouseDown();
       },
       bindMouseDown : function() {
           console.log(EventMouseDown);
           var event = new EventMouseDown;
           event.bind();
       }
    });
    
    return EventMethods;
});


