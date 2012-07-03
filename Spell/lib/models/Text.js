define(['lib/models/Shape'], function(Shape) {
    var SpellImage = Shape.extend({
        init : function(name, properties) {
            this._super(name, properties);
        },
        
        // desconsidere as coisas estranhas, ta praticamente clonado do Image.js
        render : function(label, x, y, callback) {
            var render_x = x || this.pos_x;
            var render_y = y || this.pos_y;
            var render_source = source || this.render_source;
            var render_callback = callback || this.render_event_onload;
            
            this._super();
            
            var image = new Image();
            image.src = render_source;
            image.onload = render_callback;
            
            var ctx = this.getContext();            
            ctx.drawImage(image, render_x, render_y);
        }
    }); 
   
    return SpellImage;
});