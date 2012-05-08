define(['lib/pages', 'lib/draw', 'lib/event'], function(Page, Draw, Event) {
    return Page.extend({      
        init : function() {
            this.variavel = '123';
            
            console.log('fudendo tudo agora');
            
            SpellStorage.Objects.wipe();
            
            var Caixa1 = Draw.Square('caixa1', {
                x: 50,
                y: 50,
                width: 100,
                height: 100
            }).render();
    
            var Caixa2 = Draw.Square('caixa2', {
                x: 20,
                y: 200,
                width: 140,
                height: 150
            }).render();
            
            this.stage_down();
        },
        stage_down : function() {
            console.log(this.variavel);
            console.log('BIRUTAAA!');
        }
    });
});