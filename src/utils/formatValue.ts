const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay: 'symbol', minimumFractionDigits: 2}).format(value); // TODO

export default formatValue;
