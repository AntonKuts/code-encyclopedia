import React, { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';

const App = () => {
  const [language, setLanguage] = useState('ua');
  const [tost, setStateTost] = useState('');
  const setTost = (text) => {
    setStateTost(text);
    setTimeout(()=>setStateTost(''), 2500);
  }

  return (
    <div className="App">
      <Header
        language={language}
        setTost={setTost}
        setStateTost={setStateTost}
        setLanguage={setLanguage}
        tost={tost}
      />
      <Content language={language} setTost={setTost}/>
    </div>
  );
}

export default App;
