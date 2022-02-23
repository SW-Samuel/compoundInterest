const formatCurrency = (value) => {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

const formatPercent = (value) => {
  return value.toFixed(2).replace('.', ',') + '%';
};

export { formatCurrency, formatPercent };
