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
        shuffle : function(myarray) {
            var s = [];
            while (myarray.length) {
                s.push(myarray.splice(Math.random() * myarray.length, 1));
            }
            return s;
        },
        pickRandom : function(myarray) {
            var shuffled = this.shuffle(myarray);
            var sarr = shuffled[0];
            return sarr[0];
        },
        generateUid : function() {
            var result, i, j;
            result = '';
            for(j=0; j<32; j++)
            {
                if( j == 8 || j == 12|| j == 16|| j == 20)
                    result = result + '-';
         
                i = Math.floor(Math.random()*16).toString(16).toUpperCase();
                result = result + i;
            }
            return result;
        },
        removeFromArray : function(myarray, from, to) {
            var rest = myarray.slice((to || from) + 1 || myarray.length);
            myarray.length = from < 0 ? myarray.length + from : from;
            return myarray.push.apply(myarray, rest);
        }
    });
   
    return UtilMethods;
});
