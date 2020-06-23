//In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.
//Here is an example:
//Write a program to determine whether a given input is a Toeplitz matrix
var toePlitz = [
    [1,2,3,4,8],
    [5,1,2,3,4],
    [4,5,1,2,3],
    [7,4,5,1,2]
];
var notToePlitz = [
    [1,2,3,4,8],
    [5,1,2,3,4],
    [4,5,1,2,3],
    [7,4,5,1,4]
];


var isToeplitz = (arr) => {
    var sx = 0; var sy = 0; //start x and y
    var cx = 0; var cy = 0; //current x and y
    var sentinal = true;    //watch over direction. ie if you are incrementing the sx or if you're incrementing sy. don't want to increment both the sx and sy.

    console.log('printing array');
    for(var i = 0; i < arr.length; i++){
        var x = '';
        for(var j = 0; j < arr[i].length; j++){
            x += `${arr[i][j]} `;
        }
        console.log(x);
    }

    
    while(true){
        console.log(arr[cx][cy]);
        
        //check that the current xy is the same as the start xy, if not return false
        if(arr[cx][cy] !== arr[sx][sy]){
            return false;
        }    

        cx++;cy++;  // iterate through diagonally
 
        if(cx == arr.length || cy == arr[0].length){ //if we get to the end of the array we need to move the start xy either horizontally or vertically
            if(sx < arr.length - 1 && sentinal){ //while we have not exhausted the vertical keep incrementing startx 
                sx ++;
                cx = sx; cy = sy;
                //console.log("loop")
            }
            else if(sy < arr[0].length - 1){ //once we have exhausted vertical we will move to the top of the array again and move horizontally setting startx to 0 and incrementing through starty until we reach the end
                sy++;
                sx = 0;
                cx = sx; cy = sy;
                sentinal = false;
                //console.log("loop")
            }
            else { // if we make it to the end return true as we haven't caught any differences in the diagonal
                return true;
            }
        }
    }
    

};

console.log(isToeplitz(toePlitz));
console.log(isToeplitz(notToePlitz));