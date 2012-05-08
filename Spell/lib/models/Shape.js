define(['lib/models/Model'], function(Model) {
    var Shape = Model.extend({
        init : function(name, properties) {
            this.context = properties.context || SpellStorage.Contexts.getMain().getContext();
            this.name = name || 'default';
            this.x = properties.x || 0;
            this.y = properties.y || 0;
            this.width = properties.width || 50;
            this.height = properties.height || 50;
            
            return this;
        },
        getName : function() {
            return this.name;
        },
        getX : function() {
            return this.x;
        },
        getY : function() {
            return this.y;
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