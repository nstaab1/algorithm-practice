
// proposed solution. I think this is a but verbose and not as intuitive.
// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }

//I feel like I would rather use a dictionary for this solution.
// function countUniqueValues(arr){
//     let dict = {}
//     for (num of arr) {
//         if (!dict[num]) {
//             dict[num] = num
//         }
//     }

//     let length = Object.keys(dict).length;
//     return length;
// }



// Could also use a Set to make it even shorter
function countUniqueValues(arr){
    let set = new Set(arr);
    return set.size;
}

let val = countUniqueValues([1,2,2,5,7,7,99])

console.log(val);
