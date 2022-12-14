// used https://www.revenue.scot/calculate-tax/calculate-property-transactions#calculator to calculate test results
const { calculateLBTT } = require("../index");

describe("calculateLBTT", () => {
  it("returns an error when a negative integer is passed", () => {
    expect(() => calculateLBTT(-100).toThrow());
  });
  it("returns an error when NaN data type is passed", () => {
    expect(() => calculateLBTT(NaN).toThrow(Error));
  })

  it("calculates correct LBTT due on purchase price in band 0", () => {
    expect(calculateLBTT(50000)).toEqual("£0.00");
  });
  it("calculates correct LBTT due on purchase price in band 1", () => {
    expect(calculateLBTT(200000)).toEqual("£1100.00");
  });
  it("calculates correct LBTT due on purchase price in band 2", () => {
    expect(calculateLBTT(300000)).toEqual("£4600.00");
  });
  it("calculates correct LBTT due on purchase price in band 3", () => {
    expect(calculateLBTT(500000)).toEqual("£23350.00");
  });
  it("calculates correct LBTT due on purchase price in band 4", () => {
    expect(calculateLBTT(900000)).toEqual("£66350.00");
  });
  it("calculates correct LBTT due on random price (low)", () => {
    expect(calculateLBTT(174967)).toEqual("£599.00");
  });
  it("calculates correct LBTT due on random price (medium)", () => {
    expect(calculateLBTT(349348)).toEqual("£8284.00");
  });
  it("calculates correct LBTT due on random price (high)", () => {
    expect(calculateLBTT(919552)).toEqual("£68696.00");
  });
});