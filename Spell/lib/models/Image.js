define(['lib/models/Shape'], function(Shape) {
    var SpellImage = Shape.extend({
        init : function(name, properties) {
            this._super(name, properties);
            this.render_source = properties.source || '';
            this.render_event_onload = properties.onLoad || function() {};
        },
        render : function(callback, x, y, source) {
            var render_x = x || this.pos_x;
            var render_y = y || this.pos_y;
            var render_source = source || this.render_source;
            var render_callback = callback || this.render_event_onload;
            var ctx = this.getContext(); 
            
            this._super();
            
            var image = new Image();
            image.src = render_source;
            image.onload = function() {          
                ctx.drawImage(image, render_x, render_y);
                render_callback();
            }
        }
    }); 
   
    return SpellImage;
});