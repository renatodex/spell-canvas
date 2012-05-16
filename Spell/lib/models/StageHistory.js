define(['lib/models/Model'], function(Model) {
    var StageHistory =  Model.extend({
        init : function (stageName) {
            this.name = stageName;
            this.loaded_at = this.getSpell().getUtil().getFullData();
        },
        setStageObject : function(stageObject) {
            this.stage_obj = stageObject;
        },
        getStageObject : function() {
            return this.stage_obj;
        }
    });
    
    return StageHistory;
});