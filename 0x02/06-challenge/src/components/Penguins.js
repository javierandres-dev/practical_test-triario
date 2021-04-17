import './Penguins.css';
import React, { useState, useEffect } from 'react';
import queryApi from '../helpers/queryApi';

const Penguins = () => {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [penguins, setPenguins] = useState([]);

  const getComponent = () => {
    if (done) {
      if (error) {
        return <p>Error al realizar la consulta a la API</p>;
      } else {
        if (penguins.length === 0) return <p>sin resultados ...</p>;
        return (
          <div className='penguins'>
            <h1>Lista de pingüinos</h1>
            <ul>
              {penguins.map((el, idx) => (
                <li key={idx}>{el.title}</li>
              ))}
            </ul>
          </div>
        );
      }
    } else {
      return <p>Cargando ... </p>;
    }
  };

  const getPenguins = async () => {
    const res = await queryApi();
    if (res.error) {
      setError(true);
      setDone(true);
    } else {
      setPenguins(res.query.search);
      setDone(true);
    }
  };

  useEffect(() => {
    getPenguins();
  }, []);

  return <>{getComponent()}</>;
};

export default Penguins;
