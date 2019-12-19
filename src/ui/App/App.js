import React, { useState, useEffect } from 'react';
import { getDataPhrase } from '../../core/services/api';
import Article from '../components/Atoms/Article';

import './styles/App.css';

function App() {
  const [phrase, getPhrase] = useState({});

  useEffect(() => {
    getApiPhrase();
  }, []);

  const getApiPhrase = async () => {
    const phrase = await getDataPhrase();
    //console.log(phrase[0]);
    getPhrase(phrase[0]);
  };

  return (
    <div className="App">
      <Article phrase={phrase} className="phrase" />
      <button onClick={getApiPhrase}>Generar Nueva</button>
    </div>
  );
}

export default App;
