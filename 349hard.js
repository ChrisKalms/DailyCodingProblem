// Soundex is an algorithm used to categorize phonetically, such that two names that sound alike but are spelled differently have the same representation.
// Soundex maps every name to a string consisting of one letter and three numbers, like M460.
// One version of the algorithm is as follows:
// 1.	Remove consecutive consonants with the same sound (for example, change ck -> c).
// 2.	Keep the first letter. The remaining steps only apply to the rest of the string.
// 3.	Remove all vowels, including y, w, and h.
// 4.	Replace all consonants with the following digits:
// o	b, f, p, v → 1
// o	c, g, j, k, q, s, x, z → 2
// o	d, t → 3
// o	l → 4
// o	m, n → 5
// o	r → 6
// 5.	If you don't have three numbers yet, append zeros until you do. Keep the first three numbers.
// Using this scheme, Jackson and Jaxen both map to J250.
// Implement Soundex.



//TODO Remove Consecutive consonants with the same sound
let str = "Jackson";
const soundex = (str) => {
  let arr = str.split("");
  let out = [];
  const vowels = ["a", "e", "i", "o", "u", "y", "w", "h"];
  const consonants = [
    ["b", "f", "v"],
    ["c", "g", "j", "k", "q", "s", "x", "z"],
    ["d", "t"],
    ["l"],
    ["m", "n"],
    ["r"],
  ];

  for (let i = 0; i < arr.length; i++) {
    let sentinal = false; //bool in case something get's changed

    if (i != 0) {
      let char = arr[i];

      //remove vowels
      for (let j = 0; j < vowels.length; j++) {
        if (char === vowels[j]) {
          arr.splice(i, 1); //remove 1 element from array at index i
          sentinal = true;
          i--;
          break;
        }
      }

      //remove consonants
      if (!sentinal) {
        let sentinal2 = false;
        for (let j = 0; j < consonants.length && !sentinal2; j++) {
          //loop through outer array
          for (let k = 0; k < consonants[j].length; k++) {
            //loop through inner array
            let cons = consonants[j][k];
            console.log(cons);
            //console.log(cons);
            if (char === cons) {
              out.push(j + 1); // j+1 will be the digit we need
              sentinal2 = true;
              break;
            }
          }
        }
      }
    } else {
      out.push(arr[0]);
    }
  }
  console.log(out);
};

soundex(str);
