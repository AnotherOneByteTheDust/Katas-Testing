const isRepeatedThreeAndTwo = require("./isRepeatedThreeAndTwo");

describe("isRepeatedThreeAndTwo", () => {
  it("fails when checking [a,b,c,b,b]", () => {
    const charArray = ["a", "b", "c", "b", "b"];
    expect(isRepeatedThreeAndTwo(charArray)).toBe(false);
  });

  it("fails when checking [a,a,b,b,c]", () => {
    const charArray = ["a", "a", "b", "b", "c"];
    expect(isRepeatedThreeAndTwo(charArray)).toBe(false);
  });

  it("works when checking [a,b,a,b,a]", () => {
    const charArray = ["a", "b", "a", "b", "a"];
    expect(isRepeatedThreeAndTwo(charArray)).toBe(true);
  });

  it("fails when array size is different to 5", () => {
    const charArray = ["a"];
    expect(isRepeatedThreeAndTwo(charArray)).toBe(false);
  });
});
