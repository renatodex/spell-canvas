define(['lib/models/Shape'], function(Shape) {
    var Square = Shape.extend({
        init : function(name, properties) {
            this._super(name, properties);
            this.background = properties.background;
            this.stroke = properties.stroke;
        },
        render : function(x, y, width ,height) {
            var render_x = x || this.pos_x;
            var render_y = y || this.pos_y;
            var render_width = width || this.width;
            var render_height = height || this.height;
            
            this._super();
            var ctx = this.getContext();
            var fillColor = '#000000';
            var strokeStyle = '';
          
            if(typeof(this.background) != 'undefined') {
                fillColor = this.background;
            }
            
            if(typeof(this.stroke) != 'undefined') {
                strokeStyle = this.stroke;
            }
          
            ctx.strokeStyle = strokeStyle;
            ctx.fillStyle = fillColor;
            ctx.fillRect(render_x, render_y, render_width, render_height);
            ctx.strokeRect(render_x, render_y, render_width, render_height);
        },
        
//        addX : function(pos_x) {
//            this.render();
//        },
//        addY : function(pos_y) {
//            this.render();
//        },
        
        moveTo : function(x, y) {
            this.render(x, y);
        }
    }); 
   
    return Square;
});