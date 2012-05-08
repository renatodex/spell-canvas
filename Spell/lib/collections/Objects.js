define(['lib/collections/Collection'], function(Collection) {
   var Objects = Collection.extend({
       wipe : function() {
           this.storage = [];
       }
   });
   
   return Objects;
});