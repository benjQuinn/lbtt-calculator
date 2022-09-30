exports.calculateLBTT = function (transactionFee) {
  let tax = 0;
  let taxableTransactionFee = transactionFee - 145000;

  if (typeof transactionFee !== "number" || transactionFee < 0) {
    throw new Error(`Input must be a positive integer.`);
  }
  // band 1
  if (transactionFee < 145000) {
    return tax;
    // band 2
  } else if (transactionFee > 145001 && transactionFee < 250000) {
    tax = Math.floor(taxableTransactionFee * 0.02);
    // band 3
  } else if (transactionFee > 250001 && transactionFee < 325000) {
    tax = 105000 * 0.02;
    taxableTransactionFee -= 105000;
    tax += taxableTransactionFee * 0.05;
    // band 4
  } else if (transactionFee > 325001 && transactionFee < 750000) {
    tax = Math.floor(105000 * 0.02 + 75000 * 0.05);
    taxableTransactionFee -= 105000 + 75000;
    tax += Math.floor(taxableTransactionFee * 0.1);
    // band 5
  } else if (transactionFee > 750000) {
    tax = Math.floor(105000 * 0.02 + 75000 * 0.05 + 425000 * 0.1);
    taxableTransactionFee -= 105000 + 75000 + 425000;
    tax += Math.floor(taxableTransactionFee * 0.12);
  }

  return `£${tax.toFixed(2)}`;
};
