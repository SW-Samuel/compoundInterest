const calculate = (initialCapital, rate, period) => {
  const values = [];

  for (let a = 1; a <= period; a++) {
    const total = initialCapital * (1 + rate / 100) ** a;
    const balance = total - initialCapital;

    values.push({
      month: a,
      total,
      balance,
      percent: (balance * 100) / initialCapital,
    });
  }

  return values;
};

export default calculate;
