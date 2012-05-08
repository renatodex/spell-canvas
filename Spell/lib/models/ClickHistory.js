define(['lib/models/Model'], function(Model) {
    var ClickHistory = Model.extend({
        init : function(stageName, mouseX, mouseY) {
            this.stageName = stageName;
            this.x = mouseX - game_obj.offset().left;
            this.y = mouseY - game_obj.offset().top;
            this.clicked_at = this.getSpell().getUtil().getFullData();
        } 
    });
    
    return ClickHistory;
});