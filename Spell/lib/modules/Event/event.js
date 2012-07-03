define([
    'lib/modules/Event/core/event',
    'lib/modules/Event/mousedown',
    'lib/modules/Event/mouseover'
], function(EventCore, EventMouseDown, EventMouseOver) {
    var EventMethods = EventCore.extend({
       init : function() {
           
       },
       bindAll : function() {
           this.bindMouseDown();
           this.bindMouseOver();
       },
       bindMouseDown : function() {
           console.log(EventMouseDown);
           var event = new EventMouseDown;
           event.bind();
       },
       bindMouseOver : function() {
           var event = new EventMouseOver;
           event.bind();
       }
    });
    
    return EventMethods;
});


