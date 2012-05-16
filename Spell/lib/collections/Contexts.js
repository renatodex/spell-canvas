define(['lib/collections/Collection'], function(Collection) {
   var Contexts = Collection.extend({
       findByName : function(name) {
           var storage = this.getStorage();
           
           for(var i in storage) {
               if(storage[i].name == name) {
                   return storage[i]
               }
           }
           
           return null;
       },
       getMain : function() {
           var storage = this.getStorage();
           return storage[0];
       },
       
       getGhost : function() {
           var storage = this.getStorage();
           return storage[1];
       }
   });
   
   return Contexts;
});