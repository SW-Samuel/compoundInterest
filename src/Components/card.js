import React from 'react';

import { formatCurrency, formatPercent } from '../itens/padrao';

import './card.css';

const Card = ({ object }) =>
  object.map((item) => {
    const { month, total, balance, percent } = item;

    const colorClass = percent < 0 ? 'negative' : '';

    return (
      <article className={`cardComponent ${colorClass}`}>
        <span>{month}</span>
        <div>
          <p>{formatCurrency(total)}</p>
          <p>{formatCurrency(balance)}</p>
          <p>{formatPercent(percent)}</p>
        </div>
      </article>
    );
  });

export default Card;
