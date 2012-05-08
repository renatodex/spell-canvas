define(['lib/models/Model'], function(Model) {
    var StageHistory =  Model.extend({
        init : function (stageName) {
            this.name = stageName;
            this.loaded_at = this.getSpell().getUtil().getFullData();
        }
    });
    
    return StageHistory;
});