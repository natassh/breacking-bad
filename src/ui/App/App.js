import React, { useState, useEffect } from 'react';
import { getDataPhrase } from '../../core/services/api';
import Article from '../components/Atoms/Article';
import Button from '../components/Atoms/Button';

import './styles/App.css';

function App() {
  const [phrase, getPhrase] = useState({});

  useEffect(() => {
    getApiPhrase();
  }, []);

  const getApiPhrase = async () => {
    const phrase = await getDataPhrase();
    getPhrase(phrase[0]);
  };

  return (
    <div className="App">
      <Article phrase={phrase} className="phrase" />
      <Button onClick={getApiPhrase} />
    </div>
  );
}

export default App;
