function countOccurrences(charArray, char) {
  const result = charArray.filter((word) => word === char);
  return result.length;
}

function countAllOccurrences(charArray) {
  const allLetters = ["a", "b", "c"];
  const allOccurrences = [];

  allLetters.forEach((letter) => {
    allOccurrences.push(countOccurrences(charArray, letter));
  });

  return allOccurrences;
}

/**
 * Given an array with exactly 5 strings "a", "b" or "c",
 * check if the array contains three and two of the same values.
 * https://www.codewars.com/kata/5a9e86705ee396d6be000091
 * @param {array} charArray An array that contains five chars
 */

function isRepeatedExactlyTwoAndThreeTimes(charArray) {

  if (charArray.length != 5) {
    return false;
  }

  const allOccurrences = countAllOccurrences(charArray);

  return allOccurrences.includes(2) && allOccurrences.includes(3);
}

module.exports = isRepeatedExactlyTwoAndThreeTimes;