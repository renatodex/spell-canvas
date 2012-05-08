/* 
 * DebugCore
 * 
 * Base module to debug changes in Canvas way.
 * 
 * @author Renato Alves
 * @email renatodex@gmail.com
 * 
 */
define(['lib/modules/module'], function(Module) {
    var DebugCore = Module.extend({
        blacktire : function (message) {
            console.log(['%c',message].join(''),'border:0px;color:#fff;background-color:#000');
            console.log('%c ','border:0px;height:1px;background-color:#ccc');
        },
        data : function(key, value) {
            console.info(['%c[',key,']: ',value].join(''), '');
        }                    
    });
                
    return DebugCore;
});