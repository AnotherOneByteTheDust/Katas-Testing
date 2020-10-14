/**
 * It checks if the word2 differs from word1 by only one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ only by one character.
 * https://www.codewars.com/kata/5892595f190ca40ad0000095
 * @param {string} word reference word
 * @param {string} wordToCheck Check if this word is mispelled or not 
 */

function isContained(word1, word2) {
  if (word1.includes(word2) && word1.length - word2.length <= 1) {
    return true;
  } else if (word2.includes(word1) && word2.length - word1.length <= 1) {
    return true;
  }

  return false;
}

function mispelledWord(word, wordToCheck) {
  let i = 0;
  let error = 0;
  let totalErrors = 0;

  if (isContained(word, wordToCheck)) {
    return true;
  }

  while (i < word.length) {
    if (word[i] != wordToCheck[i]) {
      error++;
    }
    i++;
  }

  if (error <= 1) return true;

  (i = 0), (error = 0);
  while (i < word.length) {
    if (word[i] != wordToCheck[i]) {
      let j = i,
        k = i;

      j++;
      while (j < word.length) {
        if (word[j] != wordToCheck[k]) {
          error++, totalErrors++;
        }
        j++, k++;
      }

      if (error <= 1 && totalErrors <= 1) return true;

      (j = i), (k = i), (error = 0);
      k++;
      while (k < wordToCheck.length) {
        if (word[j] != wordToCheck[k]) {
          error++, totalErrors++;
        }
        j++, k++;
      }

      if (error <= 1 && totalErrors <= 1) return true;
    }
    i++;
  }

  return false;
}

/*

# Best Solution in Codewars:

function mispelledWord(word1, word2) {
  if (Math.abs(word1.length - word2.length) > 1) return false;
  if (~word1.indexOf(word2) || ~word2.indexOf(word1)) return true;
  return word1.split("").filter((e, i) => e != word2[i]).length == 1;
}

*/

module.exports = mispelledWord;
