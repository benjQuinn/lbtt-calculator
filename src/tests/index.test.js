// used https://www.revenue.scot/calculate-tax/calculate-property-transactions#calculator to calculate test results
const { calculateLBTT } = require("../index");

describe("calculateLBTT", () => {
  it("calculates correct LBTT due on purchase price in band 1", () => {
    expect(calculateLBTT(50000)).toEqual(0);
  });
  it("calculates correct LBTT due on purchase price in band 2", () => {
    expect(calculateLBTT(200000)).toEqual("£1100.00");
  });
  it("calculates correct LBTT due on purchase price in band 3", () => {
    expect(calculateLBTT(300000)).toEqual("£4600.00");
  });
  it("calculates correct LBTT due on purchase price in band 4", () => {
    expect(calculateLBTT(500000)).toEqual("£23350.00");
  });
});
