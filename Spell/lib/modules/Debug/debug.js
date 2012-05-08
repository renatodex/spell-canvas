/* 
 * DebugMethods
 * 
 * Debug methods using DebugCore to print debug messages at Firebug console.
 * 
 * @author Renato Alves
 * @email renatodex@gmail.com
 * 
 */
define([
    'lib/modules/Debug/core/debug',
], function (DebugCore) {    
    var DebugMethods = DebugCore.extend({
        debugRenders : function() {
            this.data('Number of Renders', SpellStorage.DrawCount.getCounter());
        },
        debugLoopStatus : function () {
            var loopStatus = 'DESATIVADO';
            if(SpellStorage.Animation.isLoopAllowed()) {
                loopStatus = 'ATIVADO';
            }
            this.data('Estado de Loop', loopStatus);
        },
        debugActualStage : function() {
            this.data('Actual Stage', SpellStorage.StageHistory.getLast().name);
        },
        debugStageHistory : function() {
            this.data('History of Render Stages');
            $.each(SpellStorage.StageHistory.getStorage(), function(key, value) {
                console.log(['        ','-',' [',key,']:',' ',value.name, ' ', '(', value.loaded_at,')'].join(''));
            });
        },
        debugClickHistory : function() {
            this.data('History of Clicks made');
            $.each(SpellStorage.ClickHistory.getStorage(), function(key, value) {
                console.log(['        ','-',' [',key,']:',' ',value.stageName, ' - ', '[',value.x, ',', value.y, ']', '(', value.clicked_at,')'].join(''));
            })
        },
        debugListObjects : function() {
            this.data('List of created objects');
            $.each(SpellStorage.Objects.getStorage(), function(key, value) {
                console.log(value);
            });            
        },
        debug : function() {
            this.blacktire('PROCESSING DATA DEBUG');
            this.debugRenders();
            this.debugActualStage();
            this.debugLoopStatus();
            this.debugStageHistory();
            this.debugClickHistory();
            this.debugListObjects();
            this.blacktire('END');
        }
    });
                
    return DebugMethods;
});