import React, { useState, useEffect } from 'react';

import calculate from '../itens/util';

import './main.css';

import Input from '../Components/input';
import Card from '../Components/card';

const Main = () => {
  const [initialCapital, setInitialCapital] = useState(5900);
  const [rate, setRate] = useState(0.8);
  const [period, setPeriod] = useState(12);
  const [object, setObject] = useState([]);

  useEffect(() => {
    setObject(calculate(initialCapital, rate, period));
  }, [initialCapital, rate, period]);

  return (
    <main className="container">
      <section>
        <Input
          label={'Capital inicial:'}
          value={initialCapital}
          handleChange={(event) => setInitialCapital(event.target.value)}
        />
        <Input
          label={'Taxa de juros mensal:'}
          value={rate}
          handleChange={(event) => setRate(event.target.value)}
        />
        <Input
          label={'Periodo (meses):'}
          value={period}
          handleChange={(event) => setPeriod(event.target.value)}
        />
      </section>
      <section>
        <Card object={object} />
      </section>
    </main>
  );
};

export default Main;
