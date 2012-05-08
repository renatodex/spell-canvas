define(['lib/models/Shape'], function(Shape) {
   var Square = Shape.extend({
      init : function(name, properties) {
        this._super(name, properties);
        this.background = properties.background;
      },
      render : function() {
          this._super();
          var ctx = this.getContext();
          var fillColor;
          
          if(typeof(this.background) == 'undefined') {
            fillColor = '#000000';
          } else {
            fillColor = this.background;
          }
          
          ctx.fillStyle = fillColor;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      } 
   });
   
   return Square;
});