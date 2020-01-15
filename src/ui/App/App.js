import React, { useState, useEffect } from 'react';
import { getQuote } from '../../core/services/quote';
import Logo from '../components/Atoms/Logo';
import Quote from '../components/Atoms/Quote';
import Button from '../components/Atoms/Button';

import './styles/App.css';

function App() {
  const [phrase, getPhrase] = useState({});

  useEffect(() => {
    handleOnClick();
  }, []);

  const handleOnClick = async () => {
    const phrase = await getQuote();
    getPhrase(phrase[0]);
  };

  return (
    <div className="App">
      <Logo />
      <Quote phrase={phrase} className="Quote" />
      <Button onClick={handleOnClick} />
    </div>
  );
}

export default App;
