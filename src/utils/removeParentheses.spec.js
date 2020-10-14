const removeParentheses = require("./removeParentheses");

describe("removeParentheses", () => {
  it("works with example 1", () => {
    const string = "example(unwanted thing)example";
    const result = "exampleexample";
    expect(removeParentheses(string)).toBe(result);
  });

  it("works with example 2", () => {
    const string = "example (unwanted thing) example";
    const result = "example  example";
    expect(removeParentheses(string)).toBe(result);
  });

  it("works with example 3", () => {
    const string = "a (bc d)e";
    const result = "a e";
    expect(removeParentheses(string)).toBe(result);
  });

  it("works with example 4", () => {
    const string = "a(b(c))";
    const result = "a";
    expect(removeParentheses(string)).toBe(result);
  });

  it("works with example 5", () => {
    const string = "hello example (words(more words) here) something";
    const result = "hello example  something";
    expect(removeParentheses(string)).toBe(result);
  });

  it("works with example 6", () => {
    const string = "(first group) (second group) (third group)";
    const result = "  ";
    expect(removeParentheses(string)).toBe(result);
  });

  it("works with example 7", () => {
    const string = "(first group) ((second (hola)group) (third group))";
    const result = " ";
    expect(removeParentheses(string)).toBe(result);
  });
});
