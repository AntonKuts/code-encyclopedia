import React, { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './headerAndMenus/Header';
import AllTitles from './headerAndMenus/AllTitles';

import { getStartInfo } from './data';

const App = () => {
  const [language, setLanguage] = useState('ua');
  const [info, setInfo] = useState(getStartInfo());
  const [tost, setStateTost] = useState('');
  const [selectLesson, setSelectLesson] = useState(0);

  const setTost = (text) => {
    setStateTost(text);
    setTimeout(()=>setStateTost(''), 3000);
  }

  return (
    <div className="App">
      <Header
        info={info}
        tost={tost}
        setInfo={setInfo}
        setTost={setTost}
        language={language}
        setLanguage={setLanguage}
        selectLesson={selectLesson}
        setStateTost={setStateTost}
        setSelectLesson={setSelectLesson}
      />
      <Content
        info={info}
        setTost={setTost}
        setInfo={setInfo}
        language={language}
      />
      <AllTitles
        info={info}
        language={language}
        setTost={setTost}
      />
    </div>
  );
}

export default App;
