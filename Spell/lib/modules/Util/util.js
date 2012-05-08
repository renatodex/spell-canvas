define(['lib/modules/Util/core/util'], function(UtilCore) {
    var UtilMethods = UtilCore.extend({
        getFullData : function() {
            var dataObj = new Date().toLocaleString().split(" ");
            return [dataObj[3], '/', dataObj[1], '/', dataObj[5], '-', dataObj[4]].join('');
        },
        random : function(min, max) {
            var randVal = min+(Math.random()*(max-min));
            var result = Math.round(randVal);
            return result;           
        },
        pickRandom : function(myarray) {
            var s = [];

            while (myarray.length) {
                s.push(myarray.splice(Math.random() * myarray.length, 1));
            }

            var colorobj = s[0];            
            return colorobj[0];
        }
    });
   
    return UtilMethods;
});
