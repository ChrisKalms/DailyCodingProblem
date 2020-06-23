//You are the technical director of WSPT radio, serving listeners nationwide. For simplicity's sake we can consider each listener to live along a horizontal line stretching from 0 (west) to 1000 (east).
//Given a list of N listeners, and a list of M radio towers, each placed at various locations along this line, determine what the minimum broadcast range would have to be in order for each listener's home to be covered.
//For example, suppose listeners = [1, 5, 11, 20], and towers = [4, 8, 15]. In this case the minimum range would be 5, since that would be required for the tower at position 15 to reach the listener at position 20.

var listeners = [1, 5, 11, 20, 50, 100];
var towers = [4, 8, 15, 19, 25];

console.log(solve(listeners, towers));
console.log(solveFasterIfOrdered(listeners, towers));
console.log(solveEvenFasterIfOrdered(listeners, towers));

function solve(l, t) {
  var count = 0;
  var closest = [];
  for (var i = 0; i < l.length; i++) {
    for (var j = 0; j < t.length; j++) {
      if (j === 0) {
        closest[i] = l[i] - t[j];
        if (closest[i] < 0) {
          closest[i] *= -1;
        }
      } else {
        var distance = l[i] - t[j];
        if (distance < 0) distance *= -1;
        if (distance < closest[i]) closest[i] = distance;
      }
      count++;
    }
  }
  console.log(count);
  return Math.max(...closest);
}

function solveFasterIfOrdered(l, t) {
  //[1,5,11,20]
  //[4,8,15]
  var closest = [];
  var count = 0;

  for (var i = 0; i < l.length; i++) {
    for (var j = 0; j < t.length; j++) {
      if (j === 0) {
        closest[i] = l[i] - t[j];
        if (closest[i] < 0) {
          closest[i] *= -1;
        }
      } else {
        var distance = l[i] - t[j];
        if (distance < 0) distance *= -1;
        if (distance < closest[i]) closest[i] = distance;
        else {
          break;
        }
      }
      count++;
    }
  }
  console.log(count);
  return Math.max(...closest);
}

function solveEvenFasterIfOrdered(l, t) {
  //[1,5,11,20]
  //[4,8,15]
  var closest = [];
  var count = 0;
  var lastTower = 0;
  for (var i = 0; i < l.length; i++) {
    for (var j = lastTower; j < t.length; j++) {
      if (j === lastTower) {
        closest[i] = l[i] - t[j];
        if (closest[i] < 0) {
          closest[i] *= -1;
        }
      } else {
        var distance = l[i] - t[j];
        if (distance < 0) distance *= -1;
        if (distance < closest[i]) {
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
