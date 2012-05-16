define(['lib/pages', 'lib/draw', 'lib/event'], function(Page, Draw, Event) {
    return Page.extend({ 
        setup : function() {
            console.log('setupando');
            SpellStorage.Objects.wipe();
            this.caixa1 = Draw.Square('caixa1', {
                x: 50,
                y: 50,
                width: 100,
                height: 100
            });

            this.variavel = '123';
        },
        draw : function() {
            
            var c1 = this.caixa1;
            
            if(this.caixa1.getX() <= 300) {
                c1.addX(1);
            }
            
            c1.render();
            
        },
        stage_down : function() {
            console.log(this.variavel);
        }
    });
});