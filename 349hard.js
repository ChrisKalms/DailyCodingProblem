
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
    ["r"]
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
            if (char === cons){
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
