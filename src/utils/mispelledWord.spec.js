const mispelledWord = require("./mispelledWord");

describe("mispelled", () => {
  it("detects the word is mispelled", () => {
    expect(mispelledWord("versed", "xersed")).toBe(true);
  });

  it("detects the word is not mispelled", () => {
    expect(mispelledWord("versed", "applb")).toBe(false);
  });

  it("detects the word is mispelled", () => {
    expect(mispelledWord("versed", "v5rsed")).toBe(true);
  });

  it("detects the word is mispelled", () => {
    expect(mispelledWord("1versed", "versed")).toBe(true);
  });

  it("detects the word is mispelled", () => {
    expect(mispelledWord("versed", "aversed")).toBe(true);
  });

  it("detects the word is not mispelled", () => {
    expect(mispelledWord("aaversed", "versed")).toBe(false);
  });

  it("detects the word is not mispelled", () => {
    expect(mispelledWord("versed", "aaversed")).toBe(false);
  });
});
