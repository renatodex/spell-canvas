define(['lib/models/Model'], function(Model) {
   var DrawCount = Model.extend({
       init : function() {
           this.counter = 0;
       },
       add : function() {
           this.counter++;
       },
       getCounter : function() {
           return this.counter;
       }
   });
   
   return DrawCount;
});