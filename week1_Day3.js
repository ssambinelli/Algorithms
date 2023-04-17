/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

const nums2 = [];
const expected2 = 0;

const nums3 = [-4, -2, -6];
const expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) {
    var count=0;
    for (var i=0; i<nums.length;i++){
        if(nums[i] %2 ==0 && nums[i]<0){
            count++;
        }
    }
    return count;
}
console.log("test1",countEvenNegatives(nums1),"should be",expected1);
console.log("test2",countEvenNegatives(nums2),"should be",expected2);
console.log("test3",countEvenNegatives(nums3),"should be",expected3);



/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
const string4 = 'hello';
const expected4 = 'Hello';

const string5 = '';
const expected5 = '';

/**
 * Capitalizes the first letter of the given string.
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
function capitalize(string) {
    if(!string || string.length===0)
    {
        return '';
    }
    var result = string[0].toUpperCase()+ string.substring(1)
    return result;
}


/* Tests for capitalization function */
const strings1 = ['hello', 'world'];
const expectedStrings1 = ['Hello', 'World'];

/**
 * Capitalizes the first letter of each string in the given array.
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
function capitalization(strings) {
    for(var i=0;i<strings.length;i++){
        strings[i]=capitalize(strings[i])
    }
    // for(var word in strings){
    //     word=capitalize(word);
    // }
    return strings;
}

console.log("test1",capitalize(string4),"should be",expected4);
console.log("test2",capitalize(string5),"should be",expected5);
console.log("test3",capitalization(strings1),"should be",expectedStrings1);