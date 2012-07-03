define(['lib/collections/Collection'], function(Collection) {
   var ApplicationStorage = Collection.extend({
       findByName : function(name, pass_reference) {
           var storage = this.getStorage();
           
           for(var i in storage) {
               if(storage[i].name == name) {
                   if(pass_reference == true) {
                       return storage[i];
                   } else {
                       return storage[i].value
                   }
               }
           }
           
           return null;
       }
   });
   
   return ApplicationStorage;
});