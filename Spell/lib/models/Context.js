define(['lib/models/Model'], function(Model) {
    var Context = Model.extend({
        init : function(params) {
            this.name = params.name || 'spell-canvas';
            this.width = params.width || 800;
            this.height = params.height || 600;
            this.jQueryObject = this.create(this.name, this.width, this.height);     
            this.ctx = this.jQueryObject[0].getContext('2d');
        },
        getName : function() {
            return this.name;  
        },
        getWidth : function() {
            return this.width;
        },
        getHeight : function() {
            return this.height;
        },
        create : function(name, width, height) {
            return $("<canvas>").attr({
                id : name,
                width: width,
                height: height
            });
        },
        getJQueryObject : function() {
            return this.jQueryObject;
        },
        getContext : function() {
            return this.ctx;
        },
        clear : function() {
            this.ctx.clearRect(0,0,this.width,this.height);
        }
    });
    
    return Context; 
});