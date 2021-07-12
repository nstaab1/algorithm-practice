function validAnagram(str1, str2) {
  console.log(str1.length);
  if (str1.length !== str2.length) {
    return false;
  }
  let strArray1 = str1.split("");
  let strArray2 = str2.split("");

  let charCounter1 = {};
  let charCounter2 = {};

  // Get frequency of chars in array 1
  for (let char of strArray1) {
    charCounter1[char] = (charCounter1[char] || 0) + 1;
    console.log(charCounter1);
  }

  // Get frequency of chars in array 2
  for (let char of strArray2) {
    charCounter2[char] = (charCounter2[char] || 0) + 1;
    console.log(charCounter2);
  }

  for (let key in charCounter1) {
    if (charCounter1[key] !== charCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("tree", "reet"));

// Another solution

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }

//     const lookup = {};

//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)

//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }

//     return true;
//   }

//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm')
