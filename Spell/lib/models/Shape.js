define(['lib/models/Model'], function(Model) {
    var Shape = Model.extend({
        init : function(name, properties) {
            this.context = properties.context || SpellStorage.Contexts.getMain().getContext();
            this.name = name || 'default';
            this.pos_x = properties.x || 0;
            this.pos_y = properties.y || 0;
            this.width = properties.width || 50;
            this.height = properties.height || 50;
            
            return this;
        },
        getName : function() {
            return this.name;
        },
        
        
        getX : function() {
            return this.pos_x;
        },
        setX : function(val) {
            this.pos_x = val;
        },
        addX : function(val) {
            this.setX(this.pos_x + val);
            this.render();
        },
        toX : function(val) {
            this.setX(val);
            this.render();
        },
        
        
        getY : function() {
            return this.pos_y;
        },        
        setY : function(val) {
            this.pos_y = val;
        },
        addY : function(val) {
            this.setY(this.pos_x + val);
            this.render();
        },
        
        
        getWidth : function() {
            return this.width;
        },
        getHeight : function() {
            return this.height;
        },
        render : function() {
            SpellStorage.Objects.insert(this);
        },
        getContext : function() {
            return this.context;
        }
    });
    
    return Shape;
});