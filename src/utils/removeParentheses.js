function removeParentheses(string) {
  let openBrackets = [];
  let finalString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(") {
      openBrackets.push(i);
    } else if (string[i] == ")") {
      openBrackets.pop();
    } else if (openBrackets.length == 0) {
      finalString += string[i];
    }
  }

  return finalString;
}

module.exports = removeParentheses;
