var smallerStringA1 = 'abcd'
var smallerStringB1 = 'efg'
var expected = 'efgabcd'

var smallerStringA2 = 'sunnyside up eggs'
var smallerStringB2 = 'biscuits and gravy'
var expected = 'sunnyside up eggsbiscuits and gravy'

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(str1,str2) {
  if(str1.length>=str2.length){
    console.log(str2+str1)}
  else {
    console.log(str1+str2)}
}
combineSmallerStringFirst(smallerStringA1,smallerStringB1);

var stringToRepeat1 = 'Birria Tacos'
var numberToRepeat1 = 5
var repeatedExpected = 'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos'

var stringToRepeat2 = 'margherita pizza'
var numberToRepeat2 = 2
var repeatedExpected = 'margherita pizzamargherita pizza'

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(str1,num1){
var result='';
  for (var i=0; i<num1;i++){
    result = result+ str1
  }
  return result
}
console.log(stringRepeat(stringToRepeat1, numberToRepeat1))

var wordArray = ['shawn', 'jim', 'tyler', 'heidi', 'john', 'alfredo', 'michael']

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength(wordArray) {
  var sum=0;
  var average;
  for (var i=0; i<wordArray.length;i++){
    sum += wordArray[i].length
  }
  average = sum / wordArray.length
  return average
}
console.log(avgWordLength(wordArray));

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */

var wordArray = ['shawn', 'jim', 'tyler', 'heidi', 'john', 'alfredo', 'michael']

function findLongestWord(wordArray) {
  var longestWord=wordArray[0];
  for (var i=1; i<wordArray.length;i++){
    if (longestWord.length <= wordArray[i].length){
      longestWord = wordArray[i]
    }
  }
  return longestWord;
}
console.log(findLongestWord(wordArray));


var rangeA1 = 10
var rangeB1 = 15
var rangeExpected = 75

/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(a,b) {
  sum=0;
  for (var i=a;i<=b;i++){
    sum+=i
  }
  return sum
}
console.log(inclusiveRangeSum(rangeA1,rangeB1));