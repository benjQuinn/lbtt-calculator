const { taxBands } = require("../src/data");

exports.calculateLBTT = function (transactionFee) {
  let tax = 0;
  let taxableTransactionFee = transactionFee - taxBands[0].difference;
  console.log(taxableTransactionFee)

  if (!Number(transactionFee) || transactionFee < 0) {
    throw new Error(`Input must be a positive integer.`);
  }
  // band 0
  if (transactionFee < taxBands[0].range[1]) {
    return tax;

    // band 1
  } else if (
    transactionFee > taxBands[1].range[0] &&
    transactionFee < taxBands[1].range[1]
  ) {
    tax += Math.floor(taxableTransactionFee * taxBands[1].rate);

    // band 2
  } else if (
    transactionFee > taxBands[2].range[0] &&
    transactionFee < taxBands[2].range[1]
  ) {
    tax += taxBands[1].difference * taxBands[1].rate;
    taxableTransactionFee -= taxBands[1].difference;
    tax += taxableTransactionFee * taxBands[2].rate;

    // band 3
  } else if (
    transactionFee > taxBands[3].range[0] &&
    transactionFee < taxBands[3].range[1]
  ) {
    tax += Math.floor(
      taxBands[1].difference * taxBands[1].rate +
        taxBands[2].difference * taxBands[2].rate
    );
    taxableTransactionFee -= taxBands[1].difference + taxBands[2].difference;
    tax += Math.floor(taxableTransactionFee * taxBands[3].rate);

    // band 4
  } else if (transactionFee > taxBands[4].range[0]) {
    tax += Math.floor(
      taxBands[1].difference * taxBands[1].rate +
        taxBands[2].difference * taxBands[2].rate +
        taxBands[3].difference * taxBands[3].rate
    );
    taxableTransactionFee -=
      taxBands[1].difference + taxBands[2].difference + taxBands[3].difference;

    tax += Math.floor(taxableTransactionFee * taxBands[4].rate);
  }

  return `£${tax.toFixed(2)}`;
};
