 
        var listeners = [1,5,11,20,50,100];
        var towers = [4, 8, 15,19,25];

        console.log(solve(listeners,towers));
        console.log(solveFasterIfOrdered(listeners,towers));
        console.log(solveEvenFasterIfOrdered(listeners,towers));

        function solve (l, t) {
            var count = 0;
            var closest = [];
            for(var i = 0; i < l.length; i++){
                for(var j = 0; j < t.length; j++){
                    if(j === 0){
                        closest[i] = l[i] - t[j];
                        if (closest[i] < 0) {
                            closest[i] *= -1;
                        }                        
                    } else {
                        var distance = l[i] - t[j];
                        if ( distance < 0 ) distance *= -1;
                        if ( distance < closest[i]) closest[i] = distance;
                    } 
                    count++;                   
                }
            }
            console.log(count);
            return Math.max(...closest);

            /* Solves the furthest not the least :|
            var distance = 0;
            for(var i = 0; i < l.length; i++) { //listeners
                for(var j = 0; j < t.length; j++){ //towers
                    var x = l[i] - t[j];
                    if( x < 0 ) {
                        x = x * -1;
                    }
                    if(x > distance){
                        distance = x;
                    }
                }
            }
            console.log(distance);
            */
        }

        function solveFasterIfOrdered(l,t){            
            //[1,5,11,20]
            //[4,8,15]
            var closest = [];            
            var count = 0;

            for(var i = 0; i < l.length; i++){
                for(var j = 0; j < t.length; j++){
                    if(j === 0){
                        closest[i] = l[i] - t[j];                        
                        if (closest[i] < 0) {
                            closest[i] *= -1;
                        }                          
                    } else {
                        var distance = l[i] - t[j];
                        if ( distance < 0 ) distance *= -1;
                        if ( distance < closest[i]) closest[i] = distance;
                        else {break}
                    }   
                    count++;                
                }
            }
            console.log(count);
            return Math.max(...closest);
        }
 
        function solveEvenFasterIfOrdered(l,t){            
            //[1,5,11,20]
            //[4,8,15]
            var closest = [];            
            var count = 0;
            var lastTower = 0;
            for(var i = 0; i < l.length; i++){
                for(var j = lastTower; j < t.length; j++){
                    if(j === lastTower){
                        closest[i] = l[i] - t[j];                        
                        if (closest[i] < 0) {
                            closest[i] *= -1;
                        }                          
                    } else {
                        var distance = l[i] - t[j];
                        if ( distance < 0 ) distance *= -1;
                        if ( distance < closest[i]) {
                            closest[i] = distance;
                            lastTower = j;
                        } else {                            
                            break;
                        }
                    }   
                    count++;                
                }
            }
            console.log(count);
            return Math.max(...closest);
        }
