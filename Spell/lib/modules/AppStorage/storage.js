/* 
 * ApplicationStorageMethods
 * 
 * Storage API to use variable between pages and models.
 * 
 * @author Renato Alves
 * @email renatodex@gmail.com
 * 
 */
define([
    'lib/modules/AppStorage/core/storage',
    'lib/models/ObjectHash'
], function (AppStorageCore, ObjectHash) {    
    var AppStorageMethods = AppStorageCore.extend({
        insert : function(name, value) {
            var object_hash = new ObjectHash(name, value);
            SpellStorage.Application.insert(object_hash);
        },
        get : function(name, pass_reference) {
            return SpellStorage.Application.findByName(name, pass_reference);
        }
    });
                
    return AppStorageMethods;
});